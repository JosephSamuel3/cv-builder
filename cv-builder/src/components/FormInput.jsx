const FormInput = ({ 
    label, 
    type = "text", 
    name, 
    value, 
    onChange, 
    placeholder,
    isTextarea = false
}) => {
    return (
        <label>
            {label}
            
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <input 
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder} 
                />
            )} 
        </label>
    )
}

export default FormInput