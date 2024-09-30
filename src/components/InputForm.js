import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../FormContext';
import Button from './Button';
import InputField from './InputField';

const InputForm = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <form className='form-container' onSubmit={handleSubmit}>

                <InputField label="Username" name="username" type="text" value={formData.username} onChange={handleChange} required /><br />

                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required /><br />

                <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required /><br />
                
                <Link to="/preview" >
                    <Button />
                </Link>

            </form>
        </>
    );
};

export default InputForm;