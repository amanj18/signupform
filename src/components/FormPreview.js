import React from 'react';
import { useLocation } from 'react-router-dom'; 

const FormPreview = () => {
    const location = useLocation();
    const formdata = location.state;

    return (
        <div>
            <h1>Form Preview</h1>
            {formdata ? (
                <div>
                    <p>Username : {formdata.username}</p>
                    <p>Email : {formdata.email}</p>
                    <p>Password : {formdata.password}</p>
                </div>
            ) : (
                <p>No form data available.</p>
            )}
        </div>
    );
};

export default FormPreview;