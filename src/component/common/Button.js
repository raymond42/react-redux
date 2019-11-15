import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, type, disabled, myClass }) => (
    <button type={type} disabled={disabled} onClick={onClick} className={`button ${myClass}`}>
            {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  myClass: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  text: 'add',
  myClass: '',
  onClick: () => {
      'button'
  },
}

  export default Button;