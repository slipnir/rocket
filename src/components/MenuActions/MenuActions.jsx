import React from 'react';

const MenuActions = () => {
    return (
        <div
            className="flex flex-row lg:flex-col items-center justify-between bg-red w-full mb-10 lg:mb-0 lg:w-[12.188rem] h-auto lg:h-[18.188rem] p-4 lg:mr-[4.375rem] mt-2">
            <img src="/public/images/action30.svg" alt=""/>
            <p className="text-white text-xl uppercase">Акции</p>
            <img src="/public/images/action20.svg" alt=""/>
        </div>
    );
};

export default MenuActions;