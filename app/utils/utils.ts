import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
let bcrypt = require('bcryptjs');

export const hashPass = (unHashPass: string) => {
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(unHashPass, salt)
  return { salt, hashedPassword }
}

export type ProductData = {
  productId: string;
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
};

export type productFormState = {
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
}

export const createObject = (
  productId: string,
  productName: string,
  productMainCategory: string,
  productSubCategory: string,
  productImgLink: string,
  productStock: number,
  productDesc: string,
  productPrice: number
) => {
  return {
    productId,
    productName,
    productMainCategory,
    productSubCategory,
    productImgLink,
    productStock,
    productDesc,
    productPrice,
  };
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

