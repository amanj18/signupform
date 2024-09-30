import React, { useContext } from 'react';
import { FormContext } from '../FormContext';

const FormPreview = () => {
    const { formData } = useContext(FormContext);

    return (
        <div>
            <h1>Form Preview</h1>
            {formData ? (
                <div>
                    <p><strong>Username:</strong> {formData.username}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Password:</strong> {formData.password}</p>
                </div>
            ) : (
                <p>No form data available.</p>
            )}
        </div>
    );
};

export default FormPreview;