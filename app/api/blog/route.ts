import { verifyAuth } from "@/app/utils/auth";
import { articleSchema } from "@/app/utils/types";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export const POST = async (req: Request) => {
  const body = await req.json();
  const result = articleSchema.safeParse(body);
  const token = req.headers.get('cookie')?.split('=')[1];
  const verifiedToken = token && (await verifyAuth(token));
  
  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    return NextResponse.json({errors: 'Unauthorized'},{ status: 401 });
  }
  
  let zodErrors = {}
  if (!result.success){
    result.error.issues.forEach((issue) => {
      zodErrors = {...zodErrors, [issue.path[0]]: issue.message}
    }); 
    return NextResponse.json(zodErrors, { status: 400})
  }
  
  const article = await prisma.article.create({
    data: {
        userId: verifiedToken.userId,
        author: verifiedToken.username,
        title: result.data.title,
        content: result.data.content,
        thumbnail: result.data.thumbnail
    }
  })
    
  return NextResponse.json(article, { status: 201})
}