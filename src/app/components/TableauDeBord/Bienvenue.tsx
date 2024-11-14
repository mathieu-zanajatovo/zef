'use client'; // Ajouter cette ligne pour indiquer que ce composant doit être rendu côté client

import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import '../stylesComponents/TableauDeBord/Demarche.css';

export default function Bienvenue() {
  return (
    <Box 
      sx={{ 
        width: '100%',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '30px'
      }}
    >
    <Card sx={{ backgroundColor: 'var(--principal)', color: 'var(--secondaire2)', width:'94%', borderRadius: '28px', padding: '20px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bienvenue sur votre tableau de bord Zone Franche,
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" className="button-demarche" sx={{ backgroundColor: 'var(--secondaire)', borderRadius:'28px' }}>+ Entamer une démarche</Button>
      </CardActions>
    </Card>
    </Box>
  );
}
