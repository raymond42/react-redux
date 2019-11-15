import React from 'react';

const Input = ({ placeholder, name, onChange, type, myClass, value }) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={`text-input ${myClass}`}
  />
);

Input.defaultProps = {
  name: 'title',
  type: 'text',
  placeholder: 'Enter task to the TO-DO list',
  myClass: '',
};

export default Input;
