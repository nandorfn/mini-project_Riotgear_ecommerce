/*
  Warnings:

  - You are about to drop the column `views` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "views",
ADD COLUMN     "viewsCount" INTEGER NOT NULL DEFAULT 0;