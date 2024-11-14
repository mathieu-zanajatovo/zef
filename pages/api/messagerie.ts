// pages/api/messagerie.ts
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Récupérer les messages avec tri par dateheure
      const messages = await prisma.messagerie.findMany({
        orderBy: {
          dateheure: 'desc',
        },
      });

      if (!messages) {
        // Si aucun message n'est retourné
        throw new Error('Aucun message trouvé');
      }

      // Retourner les messages
      res.status(200).json(messages);
    } catch (error) {
      // Vérifiez si l'erreur est un objet de type Error
      if (error instanceof Error) {
        console.error('Erreur lors de la récupération des messages:', error.message);
        res.status(500).json({
          error: 'Erreur lors de la récupération des messages',
          details: error.message,
        });
      } else {
        // Si ce n'est pas une instance d'Error, loggez l'objet brut
        console.error('Erreur inconnue:', error);
        res.status(500).json({
          error: 'Erreur lors de la récupération des messages',
          details: 'Erreur inconnue',
        });
      }
    } finally {
      // Assurez-vous que la connexion est fermée
      await prisma.$disconnect();
    }
  } else {
    // Pour les méthodes HTTP non autorisées
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
