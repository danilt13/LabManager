import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Estilos del calendario
import "../App.css"; // Tus estilos personalizados

const Reservas = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  // Simulación de horarios por día (vendrán de una base de datos)
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

  // Convertir la fecha seleccionada a formato YYYY-MM-DD
  const fechaKey = fechaSeleccionada.toISOString().split("T")[0];

  // Obtener horarios del día o valores predeterminados si no están en la lista
  const horarios = horariosPorDia[fechaKey] || [
    { hora: "07:00 - 09:00", disponible: false},
    { hora: "09:00 - 11:00", disponible: false },
    { hora: "11:00 - 14:00", disponible: true },
    { hora: "14:00 - 16:00", disponible: false},
    { hora: "16:00 - 18:00", disponible: false },
    { hora: "18:00 - 20:00", disponible: true },
  ];

  // Función para deshabilitar los domingos en el calendario
  const deshabilitarDias = ({ date }) => {
    return date.getDay() === 0;
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

      <ul className="horarios-lista">
        {horarios.map((horario, index) => (
          <li
            key={index}
            className={horario.disponible ? "disponible" : "ocupado"}
          >
            {horario.hora} - {horario.disponible ? "Disponible" : "Ocupado"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservas;
