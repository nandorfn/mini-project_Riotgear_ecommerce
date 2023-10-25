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


export const productForm = z.object({
  productName: z.string().min(4, 'Product Name at least 4 characters'),
  productMainCategory: z.string().min(2, 'Please select product main category'),
  productSubCategory: z.string().min(2, 'Please select product sub category'),
  productImgLink: z.string().min(10, 'Image Link at least 10 characters'),
  productSize: z.string().min(1, 'Please select product size'),
  productGender: z.string().min(1, 'Please select product gender'),
  productColor: z.string().min(1, 'Please select product color'),
  productStock: z.number().min(1, 'Please input product stock'),
  productDesc: z.string(),
  productPrice: z.number().min(1, 'Please input product price'),
  featured: z.boolean()
  
})
export type TProductForm = z.infer<typeof productForm>

export const tokenSchema = z.object({
  username: z.string(),
  userId: z.string(),
  role: z.string(),
  iat: z.number(),
  exp: z.number(),
})
export type JwtSchema = z.infer<typeof tokenSchema>;

export const articleSchema = z.object({
  title: z.string().min(8, 'Title must be at least 8 characters'),
  content: z.string().min(8, 'Content must be at least 8 characters'),
  thumbnail: z.string().min(8, 'Img Link must be at least 8 characters'),
});
export type TArticleSchema = z.infer<typeof articleSchema>;

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

export type order = {
  id?: number,
  orderId?: string,
  productId?: string,
  quantity?: number,
  createdAt?: Date,
  updatedAt?:  Date,
  productName?: string,
  productPrice?: number,
  productImgLink?: string,
  paymentMethod?: string
}

const OrderStatus = z.enum([
  "Ordered", "InProgress", "Shipped", "Delivered", "Cancelled", "InReturn", "Completed"
]);
export const updateOrderStatus = z.object({
  orderId: z.string(),
  status: OrderStatus
});

export type ProductData = {
  id?: number;
  productId?: string;
  productName: string;
  productMainCategory: string;
  productSubCategory: string;
  productImgLink: string;
  productSize: string;
  productGender: string;
  productColor: string;
  productStock: number;
  productDesc: string;
  productPrice: number;
  featured: number | boolean;
  reviews?: any;
};
export type ArticleModel = {
  id: number;
  title: string;
  content: string;
  author: string;
  userId: string;
  thumbnail: string;
  viewsCount: number;
  createdAt: Date;  
};

export type productFormState = {
  productId: string;
  productName: string;
  productMainCategory: string;
  productSubCategory: string;
  productImgLink: string;
  productSize: string;
  productGender: string;
  productColor: string;
  productStock: string;
  productDesc: string;
  productPrice: string;
  featured: number;
};

export type FaqItem = {
  id: number;
  q: string;
  a: string;
};