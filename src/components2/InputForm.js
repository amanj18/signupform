import React, { useState } from 'react';
import Button from '../ReusableComponents/Button';
import InputField from '../ReusableComponents/InputField';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../styles/InputForm.css';

const InputForm = ({ formData, setFormData }) => {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const navigate = useNavigate();
    const { register} = useForm({
        resolver: yupResolver()
    });
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length === 0) {
            console.log(formData);
            navigate('/preview');
        } else {
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.username) errors.username = 'Username is required';
        else if (data.username.length < 4) {
            errors.username = 'Username must be at least 4 characters long';
        }
        if (!data.email) errors.email = 'Email is required'; 
        else if (!emailRegex.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        // else if (!data.email.includes('@') || !data.email.includes('.')) {
        //     errors.email = 'Email is invalid';
        // }
        if (!data.password) {
            errors.password = 'Password is required';
        } 
        else if (!passwordRegex.test(data.password)) {
            errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol';
        }
        return errors;
    };


    return (
        <>
            <h4 className='heading'>Sign Up</h4>
            <form className='form-container' >
            <div className="input-group">
                    <InputField
                        label="Username"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        register={register}
                        icon={BiSolidUser}
                        error={errors.username}
                        require={true}
                    />
                </div><br/>
                <div className="input-group">
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        register={register}
                        icon={IoMdMail}
                        error={errors.email}
                        require={true}
                    /></div><br/>

                <div className="input-group">
                    <InputField
                        label="Password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        type={type}
                        value={formData.password}
                        onChange={handleChange}
                        icon={RiLockPasswordFill}
                        register={register}
                        error={errors.password}
                        require={true}
                    />
                    <span onClick={handleToggle} className='toggle-icon'>
                        <Icon icon={icon} size={25} />
                    </span>
                </div><br />

                <Button type="submit" onClick={handleSubmit} className="submit-btn" />
            </form>
        </>
    );
};

export default InputForm;