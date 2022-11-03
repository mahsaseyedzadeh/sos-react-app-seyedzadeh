import React from 'react';
import styles from "./CustomButton.module.scss";

const CustomButton = (
  {
    onClick = () => { },
    disabled = false,
    className = '',
    startIcon = '',
    message = '',
    type = 'button',
    style = 'default',
    children,

  }) => {

  return (
    <button
      disabled={disabled}
      type={type}
      className={
        `${className ? className : ''} ${disabled ? "disabled" : ''}`
        + `${className !== undefined && className} ${styles.root} ${styles[style]}`
      }
      onClick={() => onClick()}>
      {startIcon}&nbsp;
      {message}
      {children}
      &nbsp;
    </button>
  );
};

export default CustomButton;