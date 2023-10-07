import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8,'Password must be at least 8 characters'),
});
export type TLoginSchema = z.infer<typeof loginSchema>;

export const registerServerSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty'),
  email: z.string().email(),
  salt: z.string(),
  hashedPassword: z.string(),
});
export type TRegisterServerSchema = z.infer<typeof registerServerSchema>;

export const registerSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty'),
  email: z.string().email(),
  password: z.string().min(8,'Password must be at least 8 characters'),
  confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});
export type TRegisterSchema = z.infer<typeof registerSchema>;

export const tokenSchema = z.object({
  username: z.string(),
  userId: z.string(),
  role: z.string(),
  iat: z.number(),
  exp: z.number(),
})
export type JwtSchema = z.infer<typeof tokenSchema>;

export type userAvatar = {
  username: string
  icon: string
}