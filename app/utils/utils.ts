import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cart } from "./types";
let bcrypt = require('bcryptjs');

export const hashPass = (unHashPass: string) => {
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(unHashPass, salt)
  return { salt, hashedPassword }
}

export type ProductData = {
  id: number;
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
  productId: string;
  productName: string;
  productMainCategory: string;
  productSubCategory: string;
  productImgLink: string;
  productSize: string;
  productGender: string;
  productColor: string;
  productStock: string | number;
  productDesc: string;
  productPrice: string | number;
  featured: number | boolean;
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

export const orderSummary = (data: cart[]) => {
  let subTotal = 0;
  data.forEach((data) => {
    const total = data.quantity * data.productInfo.productPrice;
    subTotal += total;
  })
  let tax = subTotal * 11 / 100;
  
  return { subTotal, tax };
}
