import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const PATCH = async ( req: Request, { params }: {params: { id: string }}) => {
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