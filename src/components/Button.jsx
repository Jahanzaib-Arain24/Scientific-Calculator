import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'default', icon: Icon, className = '' }) => {
    return (
        <button
            className={`calc-btn ${type} ${className}`}
            onClick={() => onClick(label)}
        >
            {Icon ? <Icon size={22} strokeWidth={2.5} /> : label}
        </button>
    );
};

export default Button;
