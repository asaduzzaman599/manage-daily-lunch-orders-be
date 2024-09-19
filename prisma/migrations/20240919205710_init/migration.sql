/*
  Warnings:

  - You are about to drop the column `resturantId` on the `FoodPack` table. All the data in the column will be lost.
  - You are about to drop the `Resturant` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `restaurantId` to the `FoodPack` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FoodPack" DROP CONSTRAINT "FoodPack_resturantId_fkey";

-- AlterTable
ALTER TABLE "FoodPack" DROP COLUMN "resturantId",
ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Resturant";

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_id_key" ON "Restaurant"("id");

-- AddForeignKey
ALTER TABLE "FoodPack" ADD CONSTRAINT "FoodPack_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
