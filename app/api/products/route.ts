import { NextResponse } from "next/server";
import { verifyAuth } from "@/app/utils/auth";
import { v4 as uuidv4 } from 'uuid';
import prisma from "@/app/lib/prisma";
import type { Product } from "@prisma/client";


export const POST = async (req: Request) => {
  const uuid = uuidv4();
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token))

  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    return NextResponse.json({errors: 'Unauthorized'},{ status: 401 });
  } else {
    const body: Product = await req.json();
    const product = await prisma.product.create({
      data: {
        productId: uuid,
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

    return NextResponse.json(product, { status: 201 });
  }
}

export const GET = async (request: Request) => {
  const product = await prisma.product.findMany();
  return NextResponse.json(product, { status: 200 });
}