import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Estilos del calendario
import "../App.css"; 

const Reservas = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [formulario, setFormulario] = useState({
    nombreCompleto: "",
    horario: "",
    laboratorio: "",
    maestro: "",
    materia: "",
    numeroPractica: "",
    matricula: "",
    idReserva: "",
  });
  const [errores, setErrores] = useState({});

  const horariosPorDia = {
    "2025-02-07": [
      { hora: "07:00 - 09:00", disponible: true },
      { hora: "09:00 - 11:00", disponible: false },
      { hora: "11:00 - 14:00", disponible: true },
      { hora: "14:00 - 16:00", disponible: true },
      { hora: "16:00 - 18:00", disponible: false },
      { hora: "18:00 - 20:00", disponible: true },
    ],
  };

  const fechaKey = fechaSeleccionada.toISOString().split("T")[0];

  const horarios = horariosPorDia[fechaKey] || [
    { hora: "07:00 - 09:00", disponible: false },
    { hora: "09:00 - 11:00", disponible: false },
    { hora: "11:00 - 14:00", disponible: true },
    { hora: "14:00 - 16:00", disponible: false },
    { hora: "16:00 - 18:00", disponible: false },
    { hora: "18:00 - 20:00", disponible: true },
  ];

  const deshabilitarDias = ({ date }) => date.getDay() === 0;

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    let erroresTemp = {};

    if (!/J-\d{3}$/.test(formulario.laboratorio)) {
      erroresTemp.laboratorio = "Formato inválido. Usa J-XXX (Ejemplo: J-123)";
    }
    if (!/^\d{9}$/.test(formulario.matricula)) {
      erroresTemp.matricula = "Debe tener exactamente 9 dígitos.";
    }
    if (!formulario.nombreCompleto) erroresTemp.nombreCompleto = "Campo obligatorio.";
    if (!formulario.horario) erroresTemp.horario = "Debes seleccionar un horario.";
    if (!formulario.maestro) erroresTemp.maestro = "Campo obligatorio.";
    if (!formulario.materia) erroresTemp.materia = "Campo obligatorio.";
    if (!formulario.numeroPractica) erroresTemp.numeroPractica = "Campo obligatorio.";

    setErrores(erroresTemp);
    return Object.keys(erroresTemp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      const nuevoID = `RES-${Date.now()}`;
      setFormulario((prev) => ({ ...prev, idReserva: nuevoID }));
      alert(`Reserva creada con ID: ${nuevoID}`);
    }
  };

  return (
    <div className="reservas-container">
      <h2>Reservar Laboratorio</h2>

      <Calendar
        onChange={setFechaSeleccionada}
        value={fechaSeleccionada}
        tileDisabled={deshabilitarDias}
        className="custom-calendar"
      />

      <h3>Horarios para {fechaKey}</h3>
      <select name="horario" onChange={handleChange} required>
        <option value="">Selecciona un horario</option>
        {horarios.map((horario, index) => (
          <option
            key={index}
            value={horario.hora}
            disabled={!horario.disponible}
          >
            {horario.hora} - {horario.disponible ? "Disponible" : "Ocupado"}
          </option>
        ))}
      </select>
      {errores.horario && <p className="error">{errores.horario}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreCompleto"
          placeholder="Nombre completo"
          value={formulario.nombreCompleto}
          onChange={handleChange}
          required
        />
        {errores.nombreCompleto && <p className="error">{errores.nombreCompleto}</p>}

        <input
          type="text"
          name="laboratorio"
          placeholder="Número de laboratorio (Ej: J-123)"
          value={formulario.laboratorio}
          onChange={handleChange}
          required
        />
        {errores.laboratorio && <p className="error">{errores.laboratorio}</p>}

        <input
          type="text"
          name="maestro"
          placeholder="Maestro o maestra"
          value={formulario.maestro}
          onChange={handleChange}
          required
        />
        {errores.maestro && <p className="error">{errores.maestro}</p>}

        <input
          type="text"
          name="materia"
          placeholder="Materia"
          value={formulario.materia}
          onChange={handleChange}
          required
        />
        {errores.materia && <p className="error">{errores.materia}</p>}

        <input
          type="number"
          name="numeroPractica"
          placeholder="Número de práctica"
          value={formulario.numeroPractica}
          onChange={handleChange}
          required
        />
        {errores.numeroPractica && <p className="error">{errores.numeroPractica}</p>}

        <input
          type="text"
          name="matricula"
          placeholder="Número de matrícula (9 dígitos)"
          value={formulario.matricula}
          onChange={handleChange}
          required
        />
        {errores.matricula && <p className="error">{errores.matricula}</p>}

        <button type="submit">Reservar</button>
      </form>

      {formulario.idReserva && <p>ID de Reserva: {formulario.idReserva}</p>}
    </div>
  );
};

export default Reservas;