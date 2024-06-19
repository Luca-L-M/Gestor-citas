import './button.css';

const Button = (props) => {
    return(
        <button type={props.type}>{props.contenido}</button>
    );
};

export default Button;