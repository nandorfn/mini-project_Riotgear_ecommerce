import { NextRequest, NextResponse } from "next/server";
import type { Product } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async (req: Request, { params}: {params: { id: string}}) => {
  console.log(params.id)
  const product = await prisma.product.delete({
    where: {
      productId: params.id
    }
  });
  
  return NextResponse.json(product, { status: 200});
}