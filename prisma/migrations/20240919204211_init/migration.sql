/*
  Warnings:

  - Added the required column `title` to the `FoodPack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "designation" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FoodPack" ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Resturent" ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;
