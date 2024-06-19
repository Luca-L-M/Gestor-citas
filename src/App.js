import './App.css';
import {useState, useEffect} from "react";
import Crearcita from './views/crear_cita';
import Administrarcita from './views/administrar_cita';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>Administrador de Veterinaria</h1>
      <div>
        <Crearcita setCitas={setCitas}/>
        <Administrarcita/>
      </div>
    </>
  );
}

export default App;
