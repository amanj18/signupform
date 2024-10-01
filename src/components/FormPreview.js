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
               <div className='user-data'> 
                    <InputField label="Username" value={formData.username} />
                    <InputField label="Email" value={formData.email} />
                    <InputField label="Password" value={formData.password} />
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