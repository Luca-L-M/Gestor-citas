import './input.css';

const Input = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder}/>
        </div>
    );
};

export default Input;