import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
const prisma = new PrismaClient;
 
export const revalidate = 3600
 
export const getItem = cache(async () => {
  const item = await prisma.product.findMany();
  return item;
})