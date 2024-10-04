import React from 'react';
import InputField from '../ReusableComponents/InputField';
import { BiSolidUser } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const FormPreview = ({ formData }) => {
    const { register} = useForm({
        resolver: yupResolver()
    });

    return (
        <div>
            <h4 className='heading'>Preview Form</h4>
            <div className='form-container'>
                <InputField
                    label="Username" register={register} id="username" value={formData.username} icon={BiSolidUser} disable={true}
                />
                <br />
                <InputField
                    label="Email"
                    register={register}
                    id="username"
                    value={formData.email}
                    icon={IoMdMail}
                    disable={true}
                />
                <br />
                <InputField
                    label="Password"
                    register={register}
                    id="username"
                    value={formData.password}
                    icon={RiLockPasswordFill}
                    disable={true}
                />
            </div>
        </div>
    );
};

export default FormPreview;