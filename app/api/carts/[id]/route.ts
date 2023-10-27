import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/app/utils/auth";
import prisma from "@/app/lib/prisma";

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));

  if (!verifiedToken) {
    return NextResponse.json({ errors: 'Unauthorized' }, { status: 401 });
  }

  try {
    const quantity = await req.json();
    const updatedCart = await prisma.cart.update({
      where: {
        id: Number(params.id),
      },
      data: {
        quantity: quantity
      }
    })

    if (!updatedCart) {
      throw new Error('Internal server error')
    } else {
      return NextResponse.json(updatedCart, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ errors: error }, { status: 500 })
  }

}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token))

  if (!verifiedToken) {
    return NextResponse.json({ errors: 'Unauthorized' }, { status: 401 });
  }

  try {
    const deleteCart = await prisma.cart.delete({
      where: {
        id: Number(params.id)
      }
    });
    if (!deleteCart) {
      throw new Error('Deleted Data Not Found');
    } else {
      return NextResponse.json(deleteCart, { status: 200 });
    }

  } catch (error) {
    return NextResponse.json({ errors: error }, { status: 404 });
  }
}