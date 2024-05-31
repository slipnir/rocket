import React from 'react';
import Promocode from "../Promocode/Promocode.jsx";
import UiButton from "../UI/UiButton/UiButton.jsx";

const Result = () => {
    return (
        <div className="flex justify-end xl:mr-[5.25rem] lg:mr-0">
            <div className="flex flex-col">
                <Promocode/>
                <p className="text-grey text-base uppercase tracking-wider self-baseline mb-6">Итого к оплате: <span
                    className="text-white text-2xl font-extrabold">2 580 ₽</span>
                </p>
                <UiButton className="bg-yellow text-black w-60 hover:text-yellow hover:bg-black">Оформить заказ</UiButton>
            </div>
        </div>
    );
};

export default Result;