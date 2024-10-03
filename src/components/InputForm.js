import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';
import Button from './Button';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import '../styles/InputForm.css';
import { useForm } from 'react-hook-form';
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from './InputField';

const schema = yup.object().shape({
    username: yup.string().required('Username is required').min(4, 'Username must be at least 3 characters'),
    email: yup.string().email('Invalid email address').required('Email is required').matches(/[@]+/ , 'Is not in correct format'),
    password: yup.string().required('Password is required').matches(
        /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
});

const InputForm = () => {


    const { setFormData } = useContext(FormContext);

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setFormData(data);
        navigate('/preview');
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

    return (
        <>
            <h4 className='heading'>Sign Up</h4>
            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                <InputField
                        id="username"
                        label="Username"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        register={register}
                        icon={BiSolidUser}
                        />
                    {errors.username && <p className="error">{errors.username.message}</p>}
                </div><br/>

                <div className="input-group">
                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    register={register}
                    icon={IoMdMail}
                    /> 
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div><br />

                <div className="input-group">
                <InputField
                    id="password"
                    label="Password"
                    type={type}
                    name="password"
                    placeholder="Enter your password"
                    register={register}
                    icon={RiLockPasswordFill}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                    <span onClick={handleToggle} className='toggle-icon'>
                        <Icon icon={icon} size={25} />
                    </span>

                </div><br />
                <Button type="submit" className="submit-btn" />
            </form>
        </>
    );
};

export default InputForm;



