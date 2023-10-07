import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Product } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const body: Product = await req.json();
  const product = await prisma.product.create({
    data: {
      productId: body.productId,
      productName: body.productName,
      productMainCategory: body.productMainCategory,
      productSubCategory: body.productSubCategory,
      productImgLink: body.productImgLink,
      productSize: body.productSize,
      productGender: body.productGender,
      productColor: body.productColor,
      productStock: body.productStock,
      productDesc: body.productDesc,
      productPrice: body.productPrice,
      featured: body.featured
    }
  });
  
  return NextResponse.json(product, {status: 201});
}

export const GET = async (request: Request) =>{
  const product = await prisma.product.findMany();
  return NextResponse.json(product, {status: 200});
}