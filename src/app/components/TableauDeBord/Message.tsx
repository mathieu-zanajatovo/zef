'use client'; // Indique que ce composant doit être rendu côté client

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import '../stylesComponents/TableauDeBord/Message.css';

// Déclaration du type de données attendues
interface Message {
  id: number;
  expediteur: string;
  sujet: string;
  dateheure: string; 
  heure: string;
  zf: string;
}

export default function Message() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch des messages depuis l'API
    fetch('/api/messagerie')
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse de l\'API:', data);
        setMessages(data); // Mettre à jour l'état avec les messages récupérés
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des messages:', error);
        setError('Erreur lors de la récupération des messages');
      });
  }, []);  

  if (error) {
    return <Typography variant="body2" sx={{ color: 'red', marginTop: '20px' }}>Erreur: {error}</Typography>;
  }

  // Limiter l'affichage à 3 messages
  const messagesToDisplay = messages.slice(0, 3);

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Typography variant="body2" sx={{ color: 'var(--secondaire)', marginBottom: '20px', alignSelf: 'flex-start', marginLeft: '45px' }}>
        Derniers messages reçus
      </Typography>

      {messagesToDisplay.length > 0 ? (
        messagesToDisplay.map((message) => (
          <Card key={message.id} sx={{ backgroundColor: 'var(--secondaire3)', color: 'var(--secondaire)', width: '94%', padding: '5px', marginTop: '30px' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="div">{message.expediteur}</Typography>
                <Typography component="div">{message.id}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="div">{message.sujet}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="div">{message.zf}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="div">{new Date(message.dateheure).toLocaleString()}</Typography>
                <Typography component="div">{message.heure}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2" sx={{ color: 'gray', marginTop: '20px' }}>
          Aucun message à afficher
        </Typography>
      )}

      <Typography
        variant="body2"
        className="voir-plus"
        sx={{ color: 'var(--secondaire)', marginRight: '45px', alignSelf: 'flex-end', cursor: 'pointer', textDecoration: 'underline', marginTop: '30px' }}
        onClick={() => window.location.href = '#'}
      >
        voir plus ...
      </Typography>
    </Box>
  );
}
