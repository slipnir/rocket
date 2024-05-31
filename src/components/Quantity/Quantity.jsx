import React from 'react';
import './Quantity.css';

const Quantity = () => {
    return (
        <div className="item__quantity quantity flex w-fit h-full items-center py-2.5 px-[1.375rem] border border-grey relative">
            <span className="quantity__minus"></span>
            <span className="text-white text-base">1 шт.</span>
            <span className="quantity__plus"></span>
        </div>
    );
};

export default Quantity;