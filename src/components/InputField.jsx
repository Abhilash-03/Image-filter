const InputField = ({
  label,
  className = "",
  type = "text",
  value,
  ...props
}) => {
  return (
    <div className="inputField">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        id="input"
        value={value}
        className={className}
        {...props}
      />

      {value && <span className="val">{value}</span>}
    </div>
  );
};

export default InputField;
