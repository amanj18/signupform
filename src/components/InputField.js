import React from 'react'

const InputField = ({label ,placeholder, name, type , value ,onChange }) => {
  return (
    <>
        <label >{label} </label>
        <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} /><br />

    </>
  )
}

export default InputField;