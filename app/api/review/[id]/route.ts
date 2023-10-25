import { verifyAuth } from "@/app/utils/auth";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


export const POST = async (req: Request) => {
  const body = await req.json();
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));
  console.log(body);
  
  if (!verifiedToken) {
    return NextResponse.json({ errors: 'Unauthorized' }, { status: 401 });
  }
  
  if (!body) {
    return NextResponse.json({ errors: 'Invalid Data' }, { status: 400 });
  } 
  
  const createdReviews = [];
  for (const item of body.orderItems) {
    const {review, rating, id} = item;
    const result = await prisma.review.create({
      data: {
        text: review,
        rating: rating,
        productId: id,
        userId: verifiedToken.userId,
        orderId: body.orderId
      }
    })
    createdReviews.push(result);
  }
    
  
  
  return NextResponse.json(createdReviews, { status: 201});
}