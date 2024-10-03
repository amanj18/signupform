import React from 'react';
import InputField from './InputField';
import { BiSolidUser } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const FormPreview = ({ formData }) => {
    return (
        <div>
            <h4 className='heading'>Preview Form</h4>
            <div className='form-container'>
                <InputField
                    label="Username"
                    type="text"
                    name="username"
                    value={formData.username}
                    icon={BiSolidUser}
                    disable={true}
                />
                <br />
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    icon={IoMdMail}
                    disable={true}
                />
                <br />
                <InputField
                    label="Password"
                    type="text"
                    name="password"
                    value={formData.password}
                    icon={RiLockPasswordFill}
                    disable={true}
                />
            </div>
        </div>
    );
};

export default FormPreview;