import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
  reviews: any;
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
  reviews: any;
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
