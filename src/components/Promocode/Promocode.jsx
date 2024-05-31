import React from 'react';
import UiInput from "../UI/UiInput/UiInput.jsx";
import UiButton from "../UI/UiButton/UiButton.jsx";

const Promocode = () => {
    return (
        <div className="flex flex-col self-baseline mb-6">
            <p className="text-grey text-base uppercase tracking-wider mb-3.5">Применить промокод:</p>
            <div className="flex">
                <UiInput labelFor="promocode" ariaLabel="Введите промокод" className="h-full mr-2" />
                <UiButton className="text-yellow px-5 hover:text-black hover:bg-yellow">Применить</UiButton>
            </div>
        </div>
    );
};

export default Promocode;