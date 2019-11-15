import React from 'react';

const Checkbox = props => {
  const { checked, name, markComplete, labelClass, spanClass } = props;
  return (
    <label htmlFor="complete" onClick={markComplete} className={labelClass}>
      <input type="checkbox" name={name} checked={checked} />
      <span className={spanClass} />
    </label>
  );
};

Checkbox.defaultProps = {
  name: 'complete',
  labelClass: 'switch',
  spanClass: 'slider round',
};

export default Checkbox;
