import { verifyAuth } from "@/app/utils/auth";
import { checkStock, createOrderItem, createUserAddress, reduceProductStock } from "@/app/utils/queryDb";
import { updateOrderStatus, userAddressSchema } from "@/app/utils/types";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import prisma from "@/app/lib/prisma";
import type { OrderStatus } from "@prisma/client";

export const POST = async (req: Request) => {
  const uuid = uuidv4();
  const token = req.headers.get('cookie')?.split('=')[1];
  const body = await req.json();
  const verifiedToken = token && (await verifyAuth(token));

  if (!verifiedToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  } else {
    const result = userAddressSchema.safeParse(body);
    console.log(result);
    if (!result.success) {
      let zodErrors = {};
      result.error.issues.forEach((issue) => {
        zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
        console.log(zodErrors);
      });
      return NextResponse.json({ errors: zodErrors }, { status: 400 });
    } else {
      const hasSufficientStock = await checkStock(verifiedToken.userId);
      if (!hasSufficientStock) {
        return NextResponse.json({ error: 'Product stock is less than user request' }, { status: 400 });
      } else {

        const order = await prisma.order.create({
          data: {
            orderId: uuid,
            userId: verifiedToken.userId,
            paymentMethod: result.data.paymentMethod,
          }
        });

        if (!order) {
          return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        } else {
          const productCart = await prisma.cart.findMany({
            where: {
              userId: verifiedToken.userId
            },
            select: {
              productId: true,
              quantity: true,
            }
          });

          const orderItem = await createOrderItem(productCart, order.orderId);
          const orderAddress = await createUserAddress(result, verifiedToken.userId, order.orderId);

          if (orderItem && orderAddress) {
            await reduceProductStock(verifiedToken.userId);
            return NextResponse.json(order, { status: 201 });
          } else {
            await prisma.address.deleteMany({
              where: {
                orderId: order.orderId
              }
            });

            await prisma.orderItem.deleteMany({
              where: {
                orderId: order.orderId
              }
            });

            await prisma.order.deleteMany({
              where: {
                orderId: order.orderId
              }
            });
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
          }
        }

      }

    }

  }

}

type orderStatus = {
  orderId: string;
  status: keyof typeof OrderStatus;
}
export const PATCH = async (req: Request) => {
  const body: orderStatus = await req.json();
  const result = updateOrderStatus.safeParse(body);
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));

  // Validasi dengan Zod
  if (!result.success) {
    let zodErrors = {};
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
    });
    return NextResponse.json(zodErrors, { status: 401 });
  }

  // Cek otorisasi
  if (!verifiedToken) {
    return NextResponse.json({error:'Unauthorized'}, { status: 401 });
  }

  let orderStatus: OrderStatus = 'Delivered';
  if (verifiedToken.role === 'admin') {
    orderStatus = result.data.status;
  }

  try {
    const order = await prisma.order.update({
      where: {
        orderId: result.data.orderId,
      },
      data: {
        status: orderStatus,
      },
    });
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
