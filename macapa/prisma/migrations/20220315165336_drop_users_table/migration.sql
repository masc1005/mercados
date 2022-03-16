/*
  Warnings:

  - You are about to drop the column `userId` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `contacts` DROP FOREIGN KEY `contacts_userId_fkey`;

-- AlterTable
ALTER TABLE `contacts` DROP COLUMN `userId`,
    MODIFY `celular` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `user`;
