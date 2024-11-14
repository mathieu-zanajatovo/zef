/*
  Warnings:

  - Added the required column `contenu` to the `messagerie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "messagerie" ADD COLUMN     "contenu" TEXT NOT NULL;
