import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './componentes/menu-de-navegacion';
import Header from './componentes/header';
import Catalogo from './componentes/catalogo';
import Reservas from './componentes/reservas';
import Inicio from './componentes/inicio';
import Sesion from './componentes/inicio-sesion';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> 
        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/iniciar-sesion" element={<Sesion />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;
