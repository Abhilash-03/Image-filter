const InputField = ({label, className="", type="text", value, ...props }) => {
  return (
    <div className="inputField">
        <label htmlFor={label}>{label}</label>
       <input
         type={type}
         id="input"
         value={value}
         className={className}
         {...props}
         />
         <span className="val">{value}</span>
    </div>
  )
}

export default InputField
