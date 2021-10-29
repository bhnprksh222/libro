import React from 'react';

import './inputField.scss';

const InputField = ({
  id,
  type,
  placeholder,
  name,
}) => {
  return (
    <input 
      className="inputField"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  )
}

export default InputField;
