import React from 'react';

const MenuMobileLink = ({url, img, alt, name, className, classSpan, classImg}) => {
    return (
        <a href={url} className={`flex items-center mb-4 h-[4.375rem] self-baseline ${className}`}>
            <div className={`flex w-[4.375rem] justify-center ${classImg}`}>
                {img && <img src={img} alt={alt} />}
            </div>
            <span className={`text-white text-xl ml-9 ${classSpan}`}>{name}</span>
        </a>
    );
};

export default MenuMobileLink;