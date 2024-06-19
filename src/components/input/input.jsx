import './input.css';

const Input = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} required/>
        </div>
    );
};

export default Input;