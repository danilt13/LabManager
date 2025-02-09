import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`sidebar ${menuOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
      <ul>
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
      </ul>
    </div>
  );
};


export default Sidebar;
