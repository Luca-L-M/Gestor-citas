import './cita.css';
import Dospuntos from './dos_puntos';
import Button from './button';

const Cita = (props) => {
    return(
        <div>
            <Dospuntos strong={'Mascota'} p={props.mascota}/>
            <Dospuntos strong={'Dueño'} p={props.dueño}/>
            <Dospuntos strong={'Fecha'} p={props.fecha}/>
            <Dospuntos strong={'Hora'} p={props.hora}/>
            <Dospuntos strong={'Sintomas'} p={props.sintomas}/>
            <Button type={''} contenido={'Eliminar X'}/>
        </div>
    );
};

export default Cita;