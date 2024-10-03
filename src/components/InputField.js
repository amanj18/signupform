import React from 'react';
const InputField = ({ label,value , id, type, name, placeholder, register ,disable,icon: Icon}) => {
    
  return (
    <div>
      <label>{label}  {Icon && <Icon />} </label> 
      <input
        id ={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        {...register(id)}
        disabled={disable}
      />      
    </div>

  );

}

export default InputField;