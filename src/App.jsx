import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.jsx";
import Avions from "./pages/Avions.jsx";
import Destination from "./pages/Destination";
import Research from "./pages/Research";
import Navbar from "./component/Navbar.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Covid from "./pages/Covid.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MailDevis from "./component/Mail.devis.jsx";


export default function App() {
  
 

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Avions" element={<Avions />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Aproposdenous" element={<AboutUs />} />
          <Route path="/Covid" element={<Covid />} />         
          <Route path="/Research" element={<Research />} />
          <Route path='/demande-devis' element={<MailDevis />} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}
