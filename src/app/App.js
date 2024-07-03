// import React, { useState } from 'react';
// import FormularioCita from './Components/FormularioCita';
// import ListaCitas from './Components/ListaCitas';

// const App = () => {
//   const [citas, setCitas] = useState([]);

//   const agregarCita = (cita) => {
//     cita.id = new Date().getTime();
//     setCitas([...citas, cita]);
//   };

//   const eliminarCita = (id) => {
//     setCitas(citas.filter(cita => cita.id !== id));
//   };

//   return (
//     <div className="app-container">
//       <FormularioCita agregarCita={agregarCita} />
//       <ListaCitas citas={citas} eliminarCita={eliminarCita} />
//     </div>
//   );
// };

// export default App;