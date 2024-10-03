import React from 'react';

const Button = ({ type, onClick, className }) => {
    return (
        <button type={type} onClick={onClick} className={className}>
            Submit 
        </button>
    );
};

export default Button;