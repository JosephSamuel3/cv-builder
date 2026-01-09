const FormInput = ({ label, type = "text", name, value, onchange}) => {
    return (
        <label>
            {label}
            <input 
                type={type}
                name={name}
                value={value}
                onchange={onchange}
                placeholder={label} 
            />
        </label>
    )
}

export default FormInput