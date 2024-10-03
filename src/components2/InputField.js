import React from 'react';

const InputField = ({ id, label, type, name, placeholder, value, onChange, icon: Icon, error,disable,require }) => {
    return (
        <div className="input-field">
            <label htmlFor={id}>{label} {Icon && <Icon />}</label>
                <input
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disable}
                    required={require}
                />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default InputField;