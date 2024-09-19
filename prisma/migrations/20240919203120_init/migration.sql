-- CreateTable
CREATE TABLE "Resturent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "FoodPack" (
    "id" TEXT NOT NULL,
    "resturentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Vote" (
    "emoployeeId" TEXT NOT NULL,
    "foodPackId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("emoployeeId","foodPackId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resturent_id_key" ON "Resturent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FoodPack_id_key" ON "FoodPack"("id");

-- AddForeignKey
ALTER TABLE "FoodPack" ADD CONSTRAINT "FoodPack_resturentId_fkey" FOREIGN KEY ("resturentId") REFERENCES "Resturent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_emoployeeId_fkey" FOREIGN KEY ("emoployeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_foodPackId_fkey" FOREIGN KEY ("foodPackId") REFERENCES "FoodPack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
