import React from 'react'

const InputField = ({label ,placeholder, name, type , value ,onChange , disable }) => {
  return (
    <>
        <label >{label}  </label>
        <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} disabled={disable}/><br />

    </>
  )
}

export default InputField;