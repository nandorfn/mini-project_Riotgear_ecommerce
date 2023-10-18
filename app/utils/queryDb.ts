import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
export type { Product } from '@prisma/client'
const prisma = new PrismaClient;

export const revalidate = 3600

export const getFeatured = async () => {
  const productFeatured = await prisma.product.findMany({
    where: {
      featured: true
    }
  
  })
  return productFeatured;
}

export const getItem = cache(async(filters: any) => {
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

export const getPopularProducts = cache(async() => {
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

export const getUserProductCart = cache(async(userId: string) => {
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
})