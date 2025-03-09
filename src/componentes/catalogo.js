import React, { useState } from 'react';

const ReservaMateriales = () => {
  const [id, setId] = useState("");
  const [materiales, setMateriales] = useState("");
  const [equipos, setEquipos] = useState("");
  const [reactivos, setReactivos] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!id || !materiales) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    
    setError("");
    
    const reserva = {
      id,
      materiales: materiales.split(",").map(item => item.trim()),
      equipos: equipos.split(",").map(item => item.trim()),
      reactivos: reactivos.split(",").map(item => item.trim()),
    };
    
    console.log("Reserva realizada:", reserva);
    alert("Reserva realizada con éxito.");
    
    setId("");
    setMateriales("");
    setEquipos("");
    setReactivos("");
  };

  return (
    <div className="reserva-materiales-container">
      <h2>Reservar materiales, equipos y reactivos</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID de reserva:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="materiales">Materiales (separados por coma):</label>
          <input
            type="text"
            id="materiales"
            value={materiales}
            onChange={(e) => setMateriales(e.target.value)}
            required
          />
          <small>Escribe los materiales separados por coma, agregando cantidad y volumen. Ejemplo: Pipeta volúmetrica 10ml, frascos, microscopio.</small>
        </div>

        <div className="form-group">
          <label htmlFor="equipos">Equipos (separados por coma):</label>
          <input
            type="text"
            id="equipos"
            value={equipos}
            onChange={(e) => setEquipos(e.target.value)}
          />
          <small>Escribe los equipos separados por coma. Ejemplo: Microscopio, balanza analítica.</small>
        </div>

        <div className="form-group">
          <label htmlFor="reactivos">Reactivos (separados por coma):</label>
          <input
            type="text"
            id="reactivos"
            value={reactivos}
            onChange={(e) => setReactivos(e.target.value)}
          />
          <small>Escribe los reactivos separados por coma. Ejemplo: NaCl, HCl.</small>
        </div>

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default ReservaMateriales;
