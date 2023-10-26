import { NextResponse } from "next/server";
import { verifyAuth } from "@/app/utils/auth";
import { v4 as uuidv4 } from 'uuid';
import prisma from "@/app/lib/prisma";
import type { Product } from "@prisma/client";
import { productForm } from "@/app/utils/types";


export const POST = async (req: Request) => {
  const uuid = uuidv4();
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));
  const body: Product = await req.json();
  const result = productForm.safeParse(body);


  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    return NextResponse.json({ errors: 'Unauthorized' }, { status: 401 });
  }
  if (!body) {
    return NextResponse.json({ errors: 'Request Data Invalid' }, { status: 400 });
  }

  if (!result.success) {
    let zodErrors = {};
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
    });
    return NextResponse.json({ errors: zodErrors }, { status: 400 });
  }

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

export const GET = async (request: Request) => {
  const product = await prisma.product.findMany();
  return NextResponse.json(product, { status: 200 });
}