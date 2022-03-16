/*
  Warnings:

  - You are about to drop the column `userId` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_userId_fkey";

-- DropIndex
DROP INDEX "contacts_userId_key";

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "userId";

-- DropTable
DROP TABLE "user";
