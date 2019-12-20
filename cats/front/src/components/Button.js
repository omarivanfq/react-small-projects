import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="cat-btn">
            { text }
        </button>
    );
};

export default Button;