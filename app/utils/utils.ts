import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type ProductData = {
  productId: string;
  productName: string;
  productMainCategory: string;
  productSubCategory: string;
  productImgLink: string;
  productStock: number;
  productDesc: string;
  productPrice: number;
};

export type productFormState = {
  productName: string;
  productImgLink: string;
  productStock: string;
  productMainCategory: string;
  productSubCategory: string;
  productDesc: string;
  productPrice: string;
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
