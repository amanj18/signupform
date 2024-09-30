import React from 'react';

const FormPreview = (formdata) => {

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