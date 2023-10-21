import { Cart } from '@prisma/client';
import { cache } from 'react';
export type { Product } from '@prisma/client'
import prisma from '../lib/prisma';

export const revalidate = 3600

export const getFeatured = async () => {
  const productFeatured = await prisma.product.findMany({
    where: {
      featured: true
    }

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
  
  console.log(filters);

  const items = await prisma.product.findMany({
    where: {
      productName: filters.search || undefined,
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
  return items;
});

export const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      productId: id,
    },
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
  return product;
});

export const getPopularProducts = cache(async () => {
  const popularProducts = await prisma.product.findMany({
    orderBy: {
      viewsCount: 'desc'
    },
    take: 10
  })

  return popularProducts;
})

export const checkUser = async (email: string, pass: string) => {
  const user = await prisma.user.findMany({
    where: {
      email: email,
    }
  })
  if (user) {
    console.log(user)
  }
}

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
  const combinedData = {
    userCart: userCart.map(cartItem => {
      const product = products.find(productItem => productItem.productId === cartItem.productId);
      return {
        ...cartItem,
        productInfo: product
      };
    })
  };
  return combinedData.userCart;
}

type selectCart = Pick<Cart, 'productId' | 'quantity'>;
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
  console.log(data);
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

  const allData = await Promise.all(
    allOrder.map(async (order) => {
      const orderItems = await prisma.orderItem.findMany({
        where: {
          orderId: order.orderId,
        },
        select: {
          productId: true,
          quantity: true,
        }
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
        orderItems.map(async (item) => {
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
      
      orderData.orderItems = orderItems.map((item, index) => ({
        productId: item.productId,
        quantity: item.quantity,
        product: products[index],
      }));

      return orderData;
    })
  );
  return allData;
});

export const getUserCurrentOrder = cache(async (orderId: any) => {
  const order = await prisma.order.findFirst({
    where: {
      orderId: orderId,
      status: 'Ordered'
    }
  })

  if (order) {
    const orderItems = await prisma.orderItem.findMany({
      where: {
        orderId: order.orderId,
      }
    })

    const orderItemsWithProducts = [];    
    for (const item of orderItems) {
      const product = await prisma.product.findUnique({
        where: {
          productId: item.productId
        },
        select: {
          productName: true,
          productPrice: true,
        }
      });
      
      const combinedObject = {
        ...item,
        ...product,
        paymentMethod: order.paymentMethod,
        uniqueCode: order.id
      };

      orderItemsWithProducts.push(combinedObject);
    }

    console.log(orderItemsWithProducts);
    console.log(order);
    
    return orderItemsWithProducts;
  }
  return null;
});


