import { NextResponse } from "next/server";
import { verifyAuth } from "@/app/utils/auth";
import { v4 as uuidv4 } from 'uuid';
import prisma from "@/app/lib/prisma";
import { productForm } from "@/app/utils/types";
import { ZodIssue } from "zod";
import { TProductData } from "./[id]/route";


export const POST = async (req: Request) => {
  const cookies = req.headers.get('cookie')?.split(';')
  const tokenString = cookies?.find(str => str.startsWith('token='));
  const token = tokenString?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));
  
  // Check Role
  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    return NextResponse.json({ errors: 'Unauthorized' }, { status: 401 });
  }
  
  // Check form data
  const body: TProductData = await req.json();
  if (!body) {
    return NextResponse.json({ errors: 'Request Data Invalid' }, { status: 400 });
  }
  
  // form data validation
  const result = productForm.safeParse(body);
  if (!result.success) {
    let zodErrors = {};
    result.error.issues.forEach((issue: ZodIssue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
    });
    return NextResponse.json({ errors: zodErrors }, { status: 400 });
  }
  
  
  // create data
  const uuid = uuidv4();
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

export const GET = async () => {
  const product = await prisma.product.findMany();
  return NextResponse.json(product, { status: 200 });
}