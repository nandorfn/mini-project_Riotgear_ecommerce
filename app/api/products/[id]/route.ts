import { NextResponse } from "next/server";
import type { Product } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async (
  req: Request,
  { params }: {
    params: { id: string }
  }) => {
  const product = await prisma.product.delete({
    where: {
      productId: params.id
    }
  });
  return NextResponse.json(product, { status: 200 });
}

export const PATCH = async (
  request: Request,
  { params }: {
    params: { id: string }
  }) => {
  const body: Product = await request.json();
  const product = await prisma.product.update({
    where: {
      productId: params.id
    },
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
      productPrice: body.productPrice
    }
  });
  return NextResponse.json(product, { status: 200 });
}