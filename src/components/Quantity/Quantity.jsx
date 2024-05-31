import React, { useState } from 'react';
import './Quantity.css';

const Quantity = () => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
    };

    return (
        <div className="item__quantity quantity flex w-fit h-full items-center py-2.5 px-[1.375rem] border border-grey relative">
            <span className="quantity__minus cursor-pointer" onClick={handleDecrease}></span>
            <span className="text-white text-base">{count} шт.</span>
            <span className="quantity__plus cursor-pointer" onClick={handleIncrease}></span>
        </div>
    );
};

export default Quantity;
