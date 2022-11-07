import styles from './TextFiled.module.scss';

export const TextFiled = ({
  label,
  placeholder,
  value,
  handleChange,
  type = "text",
  required = false,
  name,
  readOnly = false,
  disabled = false,
  className,
  error = [],
  inputMode = 'text',
  maxLength,
  onKeyPress,

}) => {

  return (
    <>
      <div className={`${styles.formBox} ${className ? className : ''} `}>
        <label htmlFor="input" className="active">{label} {required ? <span className="text-danger">*</span> : null}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder !== undefined ? placeholder : ""}
          value={value}
          onChange={handleChange}
          autoComplete="none"
          readOnly={readOnly}
          disabled={disabled}
          className={!!error.length ? styles.hasError : ""}
          inputMode={inputMode}
          maxLength={maxLength}
          onKeyPress={onKeyPress}
        />

      </div>
    </>
  );
};

