import React from 'react';

const UiInput = ({className, labelFor, ariaLabel, placeholder}) => {
    return (
        <div className="flex">
            <label htmlFor={labelFor}></label>
            <input
                className={`w-full md:w-60 outline-none px-5 ${className}`}
                type="text" name={labelFor}
                id={labelFor}
                aria-label={ariaLabel}
                placeholder={placeholder}
            />
        </div>
    );
};

export default UiInput;