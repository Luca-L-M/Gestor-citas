import './administrar_cita.css';
import Cita from '../../components/cita';

const AdministrarCita = (props) => {
    return(
        <div>
            <h2>Crear Cita</h2>
            <Cita mascota={'Sifon'} dueño={'Flecha'} fecha={1-7-2024} hora={'09:20'} sintomas={'Duerme y no despierta'}/>
        </div>
    );
};

export default AdministrarCita;