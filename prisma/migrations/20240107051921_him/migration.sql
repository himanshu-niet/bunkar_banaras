/*
  Warnings:

  - Added the required column `productId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `OrderItem_title_key` ON `OrderItem`;

-- AlterTable
ALTER TABLE `OrderItem` ADD COLUMN `productId` VARCHAR(191) NOT NULL;
