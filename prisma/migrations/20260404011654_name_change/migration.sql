/*
  Warnings:

  - Added the required column `bio` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Employee_name_key";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "bio" TEXT NOT NULL;
