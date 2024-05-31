import React from 'react';

const UiButton = ({children, className}) => {
    return (
        <button
            className={`text-base uppercase font-bold tracking-widest py-3 border border-yellow self-baseline ${className}`}>
            {children}
        </button>
    );
};

export default UiButton;