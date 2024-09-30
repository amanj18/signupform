import React  , { useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
    
const InputForm = () => {
    
        const [formData , setFormData] = useState({
            username: '',
            email: '',
            password: ''
        })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <>
    <form className='form-container' onSubmit={handleSubmit} >
        <label>Username : </label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required/><br/>
        <label>Email : </label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} required/><br/>
        <label>Password : </label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} required/><br/>

        <Link to="/preview" state={formData}>
            <Button />
        </Link>
    </form>
    </>
  )
}

export default InputForm