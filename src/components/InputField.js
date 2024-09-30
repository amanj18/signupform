import React from 'react'

const InputField = ({label, name, type , value ,onChange}) => {
  return (
    <>
        <label >{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} required /><br />

    </>
  )
}

export default InputField;