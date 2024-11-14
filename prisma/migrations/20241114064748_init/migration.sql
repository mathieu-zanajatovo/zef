-- CreateTable
CREATE TABLE "messagerie" (
    "id" SERIAL NOT NULL,
    "expediteur" TEXT NOT NULL,
    "sujet" TEXT NOT NULL,
    "dateHeure" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "messagerie_pkey" PRIMARY KEY ("id")
);
