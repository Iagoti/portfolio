/*
  Warnings:

  - You are about to drop the column `reporitorio` on the `projetos` table. All the data in the column will be lost.
  - Added the required column `repositorio` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "reporitorio",
ADD COLUMN     "repositorio" TEXT NOT NULL;
