import { cache } from 'react';
import prisma from '../lib/prisma';
import { ProductData, cart } from './types';

export const revalidate = 3600

export const getFeatured = async () => {
  const productFeatured = await prisma.product.findMany({
    where: {
      featured: true
    },
    take: 12,

  })
  return productFeatured;
}

export const getItem = cache(async (filters: any) => {
  const priceRanges = filters.priceRanges
    ? filters.priceRanges.split('-').map((price: any) => parseInt(price))
    : undefined;
  const sortBy = filters.sort || '';

  let sortOptions = {};
  if (sortBy === '1') {
    sortOptions = { createdAt: 'desc' }; // New Release
  } else if (sortBy === '2') {
    sortOptions = { viewsCount: 'desc' }; // Popular
  } else if (sortBy === '3') {
    sortOptions = { productPrice: 'asc' }; // Low to High
  } else if (sortBy === '4') {
    sortOptions = { productPrice: 'desc' }; // High to Low
  } else if (sortBy === '5') {   // Top Rated
    sortOptions = {
      reviews: {
        _count: 'desc',
      },
    };
  }

  const items = await prisma.product.findMany({
    where: {
      productName: {
        contains: filters.search,
        mode: 'insensitive',
      },
      productSubCategory: filters.category || undefined,
      productGender: filters.gender || undefined,
      productSize: filters.size || undefined,
      productColor: filters.color || undefined,
      productPrice: {
        gte: priceRanges ? priceRanges[0] : undefined,
        lte: priceRanges ? priceRanges[1] : undefined,
      },
    },
    orderBy: sortOptions,
  });

  const productsWithReviews = await Promise.all(
    items.map(async (product: ProductData) => {
      const reviews = await prisma.review.findMany({
        where: {
          productId: product.productId,
        },
        select: {
          rating: true,
        },
      });

      const totalRatings = reviews.reduce((total: number, review: any) => total + review.rating, 0);
      const averageRating = reviews.length > 0 ? totalRatings / reviews.length : 0;

      return {
        ...product,
        reviews: {
          averageRating,
          totalReviews: reviews.length
        }
      };
    })
  );
  return productsWithReviews;
});

export const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      productId: id,
    },
  });

  const review = await prisma.review.findMany({
    where: {
      productId: product?.productId
    }
  });
  if (product) {
    await prisma.product.update({
      where: {
        productId: id,
      },
      data: {
        viewsCount: product.viewsCount + 1,
      },
    });
  }
  const combinedData = {
    ...product,
    reviews: review
  }
  return combinedData;
});

export const getPopularProducts = cache(async () => {
  const popularProducts = await prisma.product.findMany({
    where: {
      viewsCount: { not: 0 }
    },
    orderBy: {
      viewsCount: 'desc'
    },
    take: 14
  })

  return popularProducts;
})

export const getBlogArticles = cache(async () => {
  return await prisma.article.findMany()
})

export const getArticle = cache(async (filter: any) => {
  return await prisma.article.findFirst({
    where: {
      id: Number(filter.id),
    },
    select: {
      id: true,
      title: true,
      content: true,
      author: true,
      createdAt: true,
      thumbnail: true,
      viewsCount: true,
    }
  })
})

export const getRecomendProduct = async (category: string, existId: string) => {
  const product = await prisma.product.findMany({
    where: {
      productSubCategory: category,
      NOT: {
        productId: existId
      }
    },
    take: 4
  })

  return product;
}

export const getUserProductCart = async (userId: string) => {
  const userCart = await prisma.cart.findMany({
    where: {
      userId: userId
    }
  })

  const products: any[] = [];
  for (const cartItem of userCart) {
    const product = await getProduct(cartItem.productId);
    products.push(product);
  }
  
  type CartItem = {
    id: number;
    userId: string;
    productId: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}
  
  const combinedData = {
    userCart: userCart.map((cartItem: CartItem) => {
      const product = products.find(productItem => productItem.productId === cartItem.productId);
      return {
        ...cartItem,
        productInfo: product
      };
    })
  };
  return combinedData.userCart;
}

type selectCart = Pick<cart, 'productId' | 'quantity'>;
export const createOrderItem = async (productCart: selectCart[], orderId: string) => {
  const createdOrderItems = [];

  for (const product of productCart) {
    const createdOrderItem = await prisma.orderItem.create({
      data: {
        orderId,
        productId: product.productId,
        quantity: product.quantity
      }
    });

    createdOrderItems.push(createdOrderItem);
  }

  return createdOrderItems;
}

export const createUserAddress = async (form: any, userId: string, orderId: string) => {
  const { data } = form;
  if (data) {
    const saveAddress = await prisma.address.create({
      data: {
        userId,
        orderId,
        name: data.name,
        phone: data.phone,
        email: data.email,
        country: data.country,
        city: data.city,
        district: data.district,
        address: data.address,
        zip: data.zip
      }
    });
    return !!saveAddress;
  }
  return true;
}

async function checkStockOrReduceStock(userId: string, operation: 'check' | 'reduce') {
  const productCart = await prisma.cart.findMany({
    where: {
      userId
    },
    select: {
      id: true,
      productId: true,
      quantity: true,
    }
  });

  for (const product of productCart) {
    const productStored = await prisma.product.findFirst({
      where: {
        productId: product.productId
      }
    });

    if (!productStored) {
      return false;
    }

    if (operation === 'check' && product.quantity > productStored.productStock) {
      return false;
    } else if (operation === 'reduce') {
      if (product.quantity > productStored.productStock) {
        return false;
      } else if (product.quantity < productStored.productStock) {
        // Kurangi jumlah stok produk
        await prisma.product.update({
          where: {
            productId: product.productId
          },
          data: {
            productStock: productStored.productStock - product.quantity
          }
        });

        await prisma.cart.deleteMany({
          where: {
            productId: product.productId
          }
        });
      }
    }
  }
  return true;
}

export const checkStock = async (userId: string) => {
  return checkStockOrReduceStock(userId, 'check');
}

export const reduceProductStock = async (userId: string) => {
  return checkStockOrReduceStock(userId, 'reduce');
}

export const getOrderProducts = cache(async () => {
  const allOrder = await prisma.order.findMany();
  
  if (!allOrder || allOrder.length === 0) {
    return [];
  }

  type TOrder = {
    id: number;
    orderId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    paymentMethod: string;
    status: string;
  }

  const allData = await Promise.all(
    allOrder.map(async (order: TOrder) => {
      const orderItems = await prisma.orderItem.findMany({
        where: {
          orderId: order.orderId,
        },
        select: {
          productId: true,
          quantity: true,
        },
      });

      const address = await prisma.address.findFirst({
        where: {
          orderId: order.orderId,
        },
        select: {
          name: true,
          country: true,
          city: true,
          district: true,
          address: true,
          zip: true,
        }
      });

      const validOrderItems = Array.isArray(orderItems) ? orderItems : [];
      const orderData = {
        ...order,
        orderItems: validOrderItems,
        address,
      };

      const products = await Promise.all(
        orderItems.map(async (item: any) => {
          const product = await prisma.product.findFirst({
            where: {
              productId: item.productId,
            },
            select: {
              productName: true,
              productImgLink: true,
              productSize: true,
              productColor: true,
              productPrice: true,
            }
          });
          return product;
        })
      );

      orderData.orderItems = orderItems.map((item: any, index: number) => ({
        productId: item.productId,
        quantity: item.quantity,
        ...products[index],
      }));

      return orderData;
    })
  );

  return allData;
});



const getOrderItemsWithProducts = async (order: any) => {
  const orderData = await prisma.order.findFirst({
    where: {
      orderId: order.orderId,
    }
  })

  const orderItems = await prisma.orderItem.findMany({
    where: {
      orderId: order.orderId,
    }
  });

  const orderItemsWithProducts = [];
  for (const item of orderItems) {
    const product = await prisma.product.findUnique({
      where: {
        productId: item.productId
      },
      select: {
        productName: true,
        productPrice: true,
        productImgLink: true,
      }
    });

    const combinedObject = {
      ...item,
      ...product,
      paymentMethod: order.paymentMethod,
      status: orderData?.status,
      orderDate: orderData?.createdAt
    };

    orderItemsWithProducts.push(combinedObject);
  }

  return orderItemsWithProducts;
};

export const getUserOrder = cache(async (userId: string | undefined) => {
  if (!userId) {
    return null;
  } else {
    const allOrder = await prisma.order.findMany({
      where: {
        userId: userId,
      }
    });

    if (allOrder) {
      const allUserOrder = []
      for (const order of allOrder) {
        const orderItemsWithProducts = await getOrderItemsWithProducts(order);
        const reviews = await isOrderReviewed(order.orderId);
        const combinedData = {
          ...order,
          isReviewed: reviews,
          orderItem: orderItemsWithProducts,
        }
        allUserOrder.push(combinedData);
      }
      return allUserOrder;
    }

    return null;
  }
});

export const getUserCurrentOrder = cache(async (orderId: any) => {
  const order = await prisma.order.findFirst({
    where: {
      orderId: orderId,
    }
  });

  if (order) {
    const orderItemsWithProducts = await getOrderItemsWithProducts(order);
    return orderItemsWithProducts;
  }

  return null;
});


export const getIncomeSales = async () => {
  try {
    const completedOrders = await prisma.order.findMany({
      where: {
        status: 'Completed'
      },
      take: 30
    });

    if (completedOrders.length === 0) {
      throw new Error('No completed orders found.');
    }

    const incomeData = {
      daily: {} as Record<string, number>,
      monthly: {} as Record<string, number>,
      totalIncome: 0,
      totalProductSell: 0,
    };

    for (const order of completedOrders) {
      const orderItems = await prisma.orderItem.findMany({
        where: {
          orderId: order.orderId
        }
      });

      for (const item of orderItems) {
        const product = await prisma.product.findFirst({
          where: {
            productId: item.productId
          }
        });

        if (product?.productPrice) {
          const itemIncome = item.quantity * product.productPrice;
          incomeData.totalIncome += itemIncome;
          incomeData.totalProductSell += item.quantity;

          const orderDate = order.createdAt.toISOString().split('T')[0];
          if (incomeData.daily[orderDate]) {
            incomeData.daily[orderDate] += itemIncome;
          } else {
            incomeData.daily[orderDate] = itemIncome;
          }

          const orderMonth = order.createdAt.toISOString().split('-').slice(0, 2).join('-');
          if (incomeData.monthly[orderMonth]) {
            incomeData.monthly[orderMonth] += itemIncome;
          } else {
            incomeData.monthly[orderMonth] = itemIncome;
          }
        }
      }
    }

    return incomeData;
  } catch (error) {

    return { daily: {}, monthly: {}, totalIncome: 0, totalProductSell: 0 };
  }
}



export const getPopularProductCategory = async () => {
  const products = await prisma.product.findMany({
    select: {
      productSubCategory: true,
      viewsCount: true,
    },
    orderBy: {
      productSubCategory: 'desc',
    }
  })

  const viewsCountByCategory: { productSubCategory: string; viewsCount: number }[] = [];
  products.forEach((item: any) => {
    const { productSubCategory, viewsCount } = item;
    const existingCategory = viewsCountByCategory.find((category) => category.productSubCategory === productSubCategory);

    if (existingCategory) {
      existingCategory.viewsCount += viewsCount;
    } else {
      viewsCountByCategory.push({ productSubCategory, viewsCount });
    }
  });
  const sortedData = viewsCountByCategory.sort((a, b) => b.viewsCount - a.viewsCount).slice(0, 5);
  return sortedData;
}

export const getAnalyticsData = async () => {
  const income = await getIncomeSales();
  const popularCategory = await getPopularProductCategory();
  const user = await prisma.user.count();

  return {
    ...income,
    totalUser: user,
    popularCategory,
  };
}

const isOrderReviewed = async (orderId: string) => {
  const reviews = await prisma.review.findMany({
    where: {
      orderId: orderId,
    },
  });

  return reviews.length > 0;
};
