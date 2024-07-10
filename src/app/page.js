import Layout from './layout';
import React, { useState } from 'react';
import ListaCitas from './Components/ListaCitas';

const Home = () => {
  const [citas, setCitas] = useState([]);
  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
    };
  return (
    <Layout>
      <h1>Gestor de citas</h1>
      <ListaCitas citas={citas} eliminarCita={eliminarCita}/>
    </Layout>
  );
};

export default Home;