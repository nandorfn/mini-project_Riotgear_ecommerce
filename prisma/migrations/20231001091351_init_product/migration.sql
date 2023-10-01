-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productMainCategory" TEXT NOT NULL,
    "productSubCategory" TEXT NOT NULL,
    "productImgLink" TEXT NOT NULL,
    "productStock" INTEGER NOT NULL,
    "productDesc" TEXT NOT NULL,
    "productPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_productId_key" ON "Product"("productId");
