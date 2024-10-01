import React, { useContext , useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../FormContext';
import Button from './Button';
import InputField from './InputField';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import '../styles/InputForm.css';
import { LiaUserCircleSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const InputForm = () => {
    const { formData, setFormData } = useContext(FormContext);
        
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } 
        else {
            console.log(formData);
        }

    };

    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
     }

     const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    return (
        <>

         <h4 className='heading'>Sign Up </h4>
            <form className='form-container' onSubmit={handleSubmit}>
               

                <InputField label="Username" name="username" type="text" value={formData.username} onChange={handleChange} placeholder="username" />
                <LiaUserCircleSolid className='icons'/>
                {errors.username && <p className="error">{errors.username}</p>}
                <br />

                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email" /> 
                <MdOutlineMail className='email-icons'/>
                {errors.email && <p className="error">{errors.email}</p>}
                <br />

                <InputField label="Password" name="password"  value={formData.password} onChange={handleChange} type={type} placeholder="Password" />
                <RiLockPasswordFill className='icons'/>
                {errors.password && <p className="error">{errors.password}</p>}

                <span onClick={handleToggle}>
                  <Icon icon={icon} size={25}/>
              </span>
                
                <Link to="/preview" >
                    <Button className="submit-btn"/>
                </Link>

            </form>
        </>
    );
};

export default InputForm;