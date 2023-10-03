import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
const prisma = new PrismaClient;

export const revalidate = 3600

export const getItem = async (filters: any) => {
  const items = await prisma.product.findMany({
    where: {
      productGender: filters.gender || undefined,
      productSize: filters.size || undefined,
      productColor: filters.color || undefined,
      productPrice: {
        gte: filters.priceRanges ? parseInt(filters.priceRanges.split('-')[0]) : undefined,
        lte: filters.priceRanges ? parseInt(filters.priceRanges.split('-')[1]) : undefined,
      },
    },
  });
  return items;
};


export const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      productId: id,
    }
  });
  return product;

})