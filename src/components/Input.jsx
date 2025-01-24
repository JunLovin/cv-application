import '../App.css';

function Input(props) {
    return (
        <div className="input">
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.handleChange} maxLength={props.maxLength} max={props.max}/>
        </div>
    );
}

export default Input;