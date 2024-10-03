import React, { useContext } from 'react';
import { FormContext } from '../FormContext';
import '../styles/InputForm.css';
import InputField from './InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const FormPreview = () => {
    const { formData } = useContext(FormContext);
    const { register} = useForm({
        resolver: yupResolver()
    });


    return (
        <>
            <h4 className='heading'>Form Preview</h4>
        <div className="form-container">
            {formData ? (
               <div > 
                    <InputField register={register} id="username" label="Username" value={formData.username} disable={true}/>      
                    <InputField register={register} id="email" label="Email" value={formData.email} disable={true}/>
                    <InputField register={register} id="password" label="Password" value={formData.password} disable={true}/>
               </div> 
            ) 
            : (
                <p className="no-data">No form data available.</p>
            )}
        </div>
        </>
    );
};

export default FormPreview;