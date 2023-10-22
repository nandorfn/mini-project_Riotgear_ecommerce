import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/app/utils/auth";
import { getUserProductCart } from "@/app/utils/queryDb";
import prisma from "@/app/lib/prisma";

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));  
  if (!verifiedToken) {
    return NextResponse.json({error: 'Unauthorized'}, { status: 401 });
  } else {
    const quantity = await req.json();
    await prisma.cart.update({
      where: {
        id: Number(params.id),
      },
      data: {
        quantity: quantity
      }
    })

    const newProductQuantity = await getUserProductCart(verifiedToken.userId);
    return NextResponse.json(newProductQuantity, { status: 200 });
  }
}

export const DELETE = async (req: Request, { params }: { params: { id: string} }) => {
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token))
  if (!verifiedToken) {
    return NextResponse.json({error: 'Unauthorized'}, { status: 401 });
  } else {
    const deleteCart = await prisma.cart.delete({
      where: {
        id: Number(params.id)
      }
    });

    if (!deleteCart) {
      return NextResponse.json({error: 'Bad Request'}, { status: 400 });
    } else {
      let updateCart = await getUserProductCart(verifiedToken.userId);
      return NextResponse.json(updateCart, { status: 200 });
    }

  }

}