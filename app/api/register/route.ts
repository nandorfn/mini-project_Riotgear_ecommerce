import { registerServerSchema } from "@/app/utils/types";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import type { User } from '@prisma/client'
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const body: User = await req.json();
  const result = registerServerSchema.safeParse(body);
  const id = uuidv4()
  let zodErrors = {}
  
  if (!result.success){
    result.error.issues.forEach((issue) => {
      zodErrors = {...zodErrors, [issue.path[0]]: issue.message}
    }); 
  } else {
    await prisma.user.create({
      data: {
        userId: id,
        name: result.data.name,
        avatar: '',
        email: result.data.email,
        salt: result.data.salt,
        password: result.data.hashedPassword,
      }
    })
  }
  return NextResponse.json(
    Object.keys(zodErrors).length > 0
    ? { errors: zodErrors }
    : { success: true }
  )
}