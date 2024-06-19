import './App.css';
import Crearcita from './views/crear_cita';
import Administrarcita from './views/administrar_cita';

function App() {
  return (
    <>
      <h1>Administrador de Veterinaria</h1>
      <div>
        <Crearcita/>
        <Administrarcita/>
      </div>
    </>
  );
}

export default App;
