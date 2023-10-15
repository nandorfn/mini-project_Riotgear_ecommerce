import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const body = await req.json();
  const existingCart = await prisma.cart.findFirst({
    where: {
      userId: body.userId,
      productId: body.productId,
    }
  })

  if (existingCart) {
    const updatedCartItem = await prisma.cart.update({
      where: {
        id: existingCart.id
      },
      data: {
        quantity: existingCart.quantity + 1
      }
    });
    return NextResponse.json(updatedCartItem, { status: 200 });
  } else {
    const newCartItem = await prisma.cart.create({
      data: {
        userId: body.userId,
        productId: body.productId,
        quantity: Number(body.quantity)
      }
    })
    return NextResponse.json(newCartItem, { status: 201 });
  }
}