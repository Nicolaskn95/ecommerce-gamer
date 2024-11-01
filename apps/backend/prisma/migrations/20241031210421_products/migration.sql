-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,
    "videoReview" TEXT NOT NULL,
    "tags" TEXT[],
    "basePrice" INTEGER NOT NULL,
    "promotionPrice" INTEGER NOT NULL,
    "lowPrice" INTEGER NOT NULL,
    "highPrice" INTEGER NOT NULL,
    "averagePrice" INTEGER NOT NULL,
    "especifications" JSONB NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
