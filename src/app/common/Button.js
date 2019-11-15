import React from 'react';

const Button = ({ children, onClick, type, disabled, myClass }) => (
  <button type={type} disabled={disabled} onClick={onClick} className={`button ${myClass}`}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  disabled: false,
  myClass: '',
  onClick: () => {
    'button';
  },
};

export default Button;
