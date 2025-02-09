import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./menu-de-navegacion";
import '../App.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <div className="logo">🔬LabManager</div>
        <Link to="/iniciar-sesion">
          <button className="login-btn">Iniciar Sesión</button>
        </Link>
      </header>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
