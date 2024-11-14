/*
  Warnings:

  - You are about to drop the column `dateHeure` on the `messagerie` table. All the data in the column will be lost.
  - Added the required column `dateheure` to the `messagerie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "messagerie" DROP COLUMN "dateHeure",
ADD COLUMN     "dateheure" TIMESTAMPTZ NOT NULL;
