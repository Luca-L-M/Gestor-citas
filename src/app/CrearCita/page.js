import Layout from './layout';
import React, { useState } from 'react';
import FormularioCita from './Components/FormularioCita';

const CrearCita = () => {
    const [citas, setCitas] = useState([]);
    const agregarCita = (cita) => {
      cita.id = new Date().getTime();
      setCitas([...citas, cita]);
    };
    return(
      <Layout>
        <FormularioCita agregarCita={agregarCita}/>
      </Layout>
    );
};

export default CrearCita;