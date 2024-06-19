import './crear_cita.css';
import Input from '../../components/input';
import Button from '../../button';

const CrearCita = (props) => {
    return(
        <div>
            <h2>Crear Cita</h2>
            <form>
                <Input label={'Nombre de la Mascota'} type={'text'} name={'mascota'} placeholder={'Nombre de la mascota'}/>
                <Input label={'Nombre del Dueño'} type={'text'} name={'dueño'} placeholder={'Nombre del dueño'}/>
                <Input label={'Fecha'} type={'Date'} name={'fecha'} placeholder={'dd/mm/aaaa'}/>
                <Input label={'Hora'} type={'Time'} name={'hora'} placeholder={'--:--'}/>
                <Input label={'Sintomas'} type={'text'} name={'sintomas'} placeholder={'sintomas'}/>
                <Button type={'submit'} contenido={'Agregar cita'}/>
            </form>
        </div>
    );
};

export default CrearCita;
