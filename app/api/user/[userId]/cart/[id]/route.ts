import { verifyAuth } from "@/app/utils/auth";
import { getUserProductCart } from "@/app/utils/queryDb";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
  const headers = req.headers;
  const authorizationHeader = headers.get('cookie');
  const token = authorizationHeader?.split('=')[1]
  const verifiedToken = token && (await verifyAuth(token))
  if (!verifiedToken) {
    return NextResponse.json(
      'Unauthorized',
      { status: 401 }
    );
  } else {
    const quantity = await req.json();
    const newProductQuantity = await prisma.cart.update({
      where: {
        id: Number(params.id),
      },
      data: {
        quantity: quantity
      }
    })

    return NextResponse.json(newProductQuantity, { status: 200 });
  }
}

export const DELETE = async (req: Request, { params }: { params: { id: string, userId: string } }) => {
  const headers = req.headers;
  const authorizationHeader = headers.get('cookie');
  const token = authorizationHeader?.split('=')[1]
  const verifiedToken = token && (await verifyAuth(token))
  if (!verifiedToken) {
    return NextResponse.json(
      'Unauthorized',
      { status: 401 }
    );
  } else {
    const deleteCart = await prisma.cart.delete({
      where: {
        id: Number(params.id)
      }
    });

    if (!deleteCart) {
      return NextResponse.json('Sorry, your request cannot be processed', { status: 204 });
    } else {
      let updateCart = await getUserProductCart(params.userId);
      console.log(updateCart);
      return NextResponse.json(updateCart, { status: 200 });
    }

  }

}