/*
  Warnings:

  - You are about to drop the column `resturentId` on the `FoodPack` table. All the data in the column will be lost.
  - You are about to drop the `Resturent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `resturantId` to the `FoodPack` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FoodPack" DROP CONSTRAINT "FoodPack_resturentId_fkey";

-- AlterTable
ALTER TABLE "FoodPack" DROP COLUMN "resturentId",
ADD COLUMN     "resturantId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Resturent";

-- CreateTable
CREATE TABLE "Resturant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Resturant_id_key" ON "Resturant"("id");

-- AddForeignKey
ALTER TABLE "FoodPack" ADD CONSTRAINT "FoodPack_resturantId_fkey" FOREIGN KEY ("resturantId") REFERENCES "Resturant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
