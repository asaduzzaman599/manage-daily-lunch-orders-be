/*
  Warnings:

  - Added the required column `designation` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `FoodPack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Resturent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Resturent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "FoodPack" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Resturent" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
