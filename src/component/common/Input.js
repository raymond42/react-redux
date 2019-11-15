import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, name, onChange, type, myClass }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className={`text-input ${myClass}`}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  myClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  placeholder: 'Create a task',
  myClass: '',
};

export default Input;