import { loginSchema } from "@/app/utils/types";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"
const prisma = new PrismaClient();
let bcrypt = require('bcryptjs');
import jwt from 'jsonwebtoken';

export const POST = async (req: Request) => {
  const JWT_SECRET = process.env.JWT_SECRET_KEY;
  const body: unknown = await req.json();
  const result = loginSchema.safeParse(body);
  let zodErrors = {}
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
    });
  } else {
    const user = await prisma.user.findUnique({
      where: {
        email: result.data.email,
      }
    })
    if (!user) {
      zodErrors = { ...zodErrors, email: "User not found" };
    } else {
      const checkPass = bcrypt.compareSync(result.data.password, user.password)
      if (!checkPass) {
        zodErrors = { ...zodErrors, password: "Invalid password" };
      } else {
        const token = jwt.sign({
          username: user.name,
          userId: user.userId,
          role: user.role
        },
          JWT_SECRET!, {
          expiresIn: '1h'
        });
        return NextResponse.json({ token }, { status: 200 });
      }
    }
  }
  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  )
}