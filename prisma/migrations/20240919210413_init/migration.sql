/*
  Warnings:

  - The primary key for the `Vote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `emoployeeId` on the `Vote` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_emoployeeId_fkey";

-- AlterTable
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_pkey",
DROP COLUMN "emoployeeId",
ADD COLUMN     "employeeId" TEXT NOT NULL,
ADD CONSTRAINT "Vote_pkey" PRIMARY KEY ("employeeId", "foodPackId");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
