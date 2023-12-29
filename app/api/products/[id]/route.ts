import { NextResponse } from "next/server";
import { verifyAuth } from "@/app/utils/auth";
import prisma from "@/app/lib/prisma";

export type TProductData = {
  id: number;
  productId: string;
  productName: string;
  productMainCategory: string;
  productSubCategory: string;
  productImgLink: string;
  productSize: string;
  productGender: string;
  productColor: string;
  productStock: number;
  productDesc: string;
  productPrice: number;
  featured: boolean;
};


export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const cookies = req.headers.get('cookie')?.split(';')
  const tokenString = cookies?.find(str => str.startsWith('token='));
  const token = tokenString?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));

  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    return NextResponse.json({ errors: 'Unauthorized' }, { status: 401 });
  } else {
    const product = await prisma.product.delete({
      where: {
        id: Number(params.id)
        }
    });
    return NextResponse.json(product, { status: 200 });
  }
}

export const PATCH = async (req: Request, { params }: {
  params: { id: string }
}) => {
  const cookies = req.headers.get('cookie')?.split(';')
  const tokenString = cookies?.find(str => str.startsWith('token='));
  const token = tokenString?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));

  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    return NextResponse.json({ errors: 'Unauthorized' }, { status: 401 });
  } else {
    const body: TProductData = await req.json();
    const product = await prisma.product.update({
      where: {
        id: Number(params.id)
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