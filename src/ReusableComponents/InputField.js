import React from 'react';

const InputField = ({ id, label, type, name, placeholder, value,register, onChange, icon: Icon, error,disable,require }) => {
    return (
        <div className="input-field">
            <label htmlFor={id}>{label} {Icon && <Icon />}</label>
                <input
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    {...register(id)}
                    onChange={onChange}
                    disabled={disable}
                    required={require}
                />
                {require 
                    ? (error && <span className="error-message">{error}</span>) 
                    : (error && <span className="error-message">{error.message}</span>)
                }
        </div>
    );
};

export default InputField;