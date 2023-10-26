import { verifyAuth } from "@/app/utils/auth";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getUserOrder } from "@/app/utils/queryDb";


export const POST = async (req: Request) => {
  const body = await req.json();
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));
  
  if (!verifiedToken) {
    return NextResponse.json({ errors: 'Unauthorized' }, { status: 401 });
  }
  
  if (!body) {
    return NextResponse.json({ errors: 'Invalid Data' }, { status: 400 });
  } 
  
  for (const item of body.orderItems) {
    const {review, rating, id} = item;
    await prisma.review.create({
      data: {
        text: review,
        rating: rating,
        productId: id,
        userId: verifiedToken.userId,
        orderId: body.orderId
      }
    })
  }
    
  const orders = await getUserOrder(verifiedToken.userId);
  const filteredOrders = orders?.filter((order) => order.orderId === body.orderId);
  
  
  return NextResponse.json(filteredOrders, { status: 201});
}