'use client'; // Ajouter cette ligne pour indiquer que ce composant doit être rendu côté client

// Home.tsx (ou page.tsx)
import Bienvenue from "../components/TableauDeBord/Bienvenue"; 
import Demarche from "../components/TableauDeBord/Demarche"; 
import Message from "../components/TableauDeBord/Message"; 

export default function TableauDeBord_page() {
  return (
    <div className="home">
      <Bienvenue />
      <Demarche />
      <Message />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
