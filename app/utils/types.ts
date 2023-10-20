import { z } from "zod";

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
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
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
export type TRegisterSchema = z.infer<typeof registerSchema>;

export const userAddressSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty'),
  phone: z.string().refine((str) => phoneRegex.test(str), {message: "Please enter a valid phone number" }),
  email: z.string().email({message: "Please enter a valid email address" }),  
  country: z.string().min(2, 'Please select a country'),
  city: z.string().min(2, 'Please select a city'),
  district: z.string().min(1, 'Please select a district'),
  address: z.string().min(2, 'Please input a valid street address'),
  zip: z.string().min(2, 'Postal code cannot be empty'),
  paymentMethod: z.any().refine((str) => str !== null, {message: 'Please choose a payment method'} ),
})
export type TUserAddressSchema = z.infer<typeof userAddressSchema>

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

export type userJwtSchema = {
  role: string;
  username: string;
  userId: string;
  iat: number;
  exp: number;
}
// Cart Pages
export type cart = {
  productInfo: any;
  id: number;
  userId: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
export type DataProductProps = {
  products: cart[];
  user: undefined | userJwtSchema;
}

