'use client'; // Ajouter cette ligne pour indiquer que ce composant doit être rendu côté client

import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import { FaCalendarDay, FaPen } from "react-icons/fa";
import '../stylesComponents/TableauDeBord/Bienvenue.css';

export default function Demarche() {
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
    <Card sx={{ backgroundColor: 'var(--secondaire3)', width:'94%', borderRadius: '28px', padding: '20px' }}>
        <Typography variant="body2" sx={{ color: 'var(--secondaire)' }}>
            Démarches en cours
        </Typography>
        <br></br>
        <Card sx={{ backgroundColor: 'var(--secondaire2)', color: 'var(--secondaire2)', width:'100%', borderRadius: '28px', padding: '20px' }}>
        <CardContent sx={{ color: 'var(--secondaire)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarDay />
                <h5 style={{ margin: '0 0 0 5px' }}>- Soumission</h5>
            </Box>
            <br></br>
            <Box sx={{ alignItems: 'center' }}>
                <h5>Nom : </h5>
                <h5>Statut : </h5>
            </Box>
        </CardContent>
        <CardActions>
            <Button variant="contained" className="button-update" sx={{ backgroundColor: 'var(--tertiaire)', color: 'var(--principal)', borderRadius:'28px' }}><FaPen style={{ marginRight: '8px' }} /> Mettre à jour</Button>
        </CardActions>
        </Card>
    </Card>
    </Box>
  );
}
