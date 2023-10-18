import { NextResponse } from "next/server";
import type { Product } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { verifyAuth } from "@/app/utils/auth";
const prisma = new PrismaClient();

export const DELETE = async (
  req: Request,
  { params }: {
    params: { id: string }
  }) => {
  const headers = req.headers;
  const authorizationHeader = headers.get('authorization');
  const token = authorizationHeader?.split(' ')[1]
  const verifiedToken = token && (await verifyAuth(token))
  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    return NextResponse.json(
      'Unauthorized',
      { status: 401 }
    );
  } else {
    const product = await prisma.product.delete({
      where: {
        productId: params.id
      }
    });
    return NextResponse.json(product, { status: 200 });
  }
}

export const PATCH = async (
  req: Request,
  { params }: {
    params: { id: string }
  }) => {
  const headers = req.headers;
  const authorizationHeader = headers.get('authorization');
  const token = authorizationHeader?.split(' ')[1]
  const verifiedToken = token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err);
    }))
  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    return NextResponse.json(
      'Unauthorized',
      { status: 401 }
    );
  } else {
    const body: Product = await req.json();
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
        productPrice: body.productPrice,
        featured: body.featured
      }
    });
    return NextResponse.json(product, { status: 200 });
  }
}