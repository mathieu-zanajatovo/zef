'use client'; // Ajouter cette ligne pour indiquer que ce composant doit être rendu côté client

// Home.tsx (ou page.tsx)
import NavbarLogo from "./components/NavbarLogo"; 
import NavbarMenu from "./components/NavbarMenu"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TableauDeBord_page from './pages/TableauDeBord_page';
// import Profil from './pages/Profil';
// import Messagerie from './pages/Messagerie';
// import Deconnexion from './pages/Login';

export default function Home() {
  return (
    <div className="home">
      <NavbarLogo />
      <NavbarMenu />
      <Router>
      <Routes>
        <Route path="/" element={<TableauDeBord_page />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
       <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </Router>
    </div>
  );
}
