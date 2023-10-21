import { verifyAuth } from "@/app/utils/auth";
import { checkStock, createOrderItem, createUserAddress, reduceProductStock } from "@/app/utils/queryDb";
import { userAddressSchema } from "@/app/utils/types";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import prisma from "@/app/lib/prisma";

export const POST = async (req: Request, { params }: {
  params: { userId: string }
}) => {
  const userId = params.userId;
  const uuid = uuidv4();
  const body = await req.json();
  const headers = req.headers;
  const cookie = headers.get('cookie');
  const token = cookie?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));

  if (!verifiedToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  } else {
    const result = userAddressSchema.safeParse(body);
    if (!result.success) {
      let zodErrors = {};
      result.error.issues.forEach((issue) => {
        zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
      });
      return NextResponse.json({ errors: zodErrors }, { status: 400 });
    } else if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 400 });
    } else {
      const hasSufficientStock = await checkStock(userId);
      if (!hasSufficientStock) {
        return NextResponse.json({ error: 'Product stock is less than user request' }, { status: 400 });
      } else {
      
        const order = await prisma.order.create({
          data: {
            orderId: uuid,
            userId: params.userId,
            paymentMethod: result.data.paymentMethod
          }
        });
      
        if (!order) {
          return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        } else {
          const productCart = await prisma.cart.findMany({
            where: {
              userId: userId
            },
            select: {
              productId: true,
              quantity: true,
            }
          });
        
          const orderItem = await createOrderItem(productCart, order.orderId);
          const orderAddress = await createUserAddress(result, userId, order.orderId);
        
          if (orderItem && orderAddress) {
            await reduceProductStock(userId);
            return NextResponse.json( order, { status: 201 });
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
