import './button.css';

const Button = (props) => {
    return(
        <button onClick={props.onClick}>{props.contenido}</button>
    );
};

export default Button;