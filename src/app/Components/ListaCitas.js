import React from 'react';
import CitaCard from './CitaCard';
import styles from '../styles/listaCitas.module.css';

const ListaCitas = ({ citas, eliminarCita }) => {
  return (
    <div className={styles.listaCitas}>
      <h2>Administra tus citas</h2>
      {citas.map(cita => (
        <CitaCard
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
        />
      ))}
    </div>
  );
};

export default ListaCitas;