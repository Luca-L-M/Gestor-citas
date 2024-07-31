"use client"; 

import React, { useState, useEffect } from 'react';
import FormularioCita from '../Components/FormularioCita';
import ListaCitas from '../Components/ListaCitas';

const Reservas = () => {
  // Lee las citas desde localStorage al iniciar el componente
  const [citas, setCitas] = useState(() => {
    const storedCitas = localStorage.getItem('citas');
    return storedCitas ? JSON.parse(storedCitas) : [];
  });

  // Guarda las citas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    cita.id = new Date().getTime();
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
  };

  return (
    <div className="app-container">
      <FormularioCita agregarCita={agregarCita}/>
      <ListaCitas citas={citas} eliminarCita={eliminarCita} />
    </div>
  );
};

export default Reservas;