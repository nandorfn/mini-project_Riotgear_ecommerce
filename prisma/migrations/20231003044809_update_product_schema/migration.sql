/*
  Warnings:

  - Added the required column `productColor` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productGender` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSize` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productColor" TEXT NOT NULL,
ADD COLUMN     "productGender" TEXT NOT NULL,
ADD COLUMN     "productSize" TEXT NOT NULL;
