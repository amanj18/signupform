import React, { useContext } from 'react';
import { FormContext } from '../FormContext';
import '../styles/InputForm.css';
import InputField from './InputField';

const FormPreview = () => {
    const { formData } = useContext(FormContext);

    return (
        <>
            <h4 className='heading'>Form Preview</h4>
        <div className="form-container">
            {formData ? (
               <div > 
                    <InputField label="Username" value={formData.username} disable={true}/>      
                    <InputField label="Email" value={formData.email} disable={true}/>
                    <InputField label="Password" value={formData.password} disable={true}/>
                    
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