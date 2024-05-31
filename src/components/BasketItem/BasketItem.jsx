import React from 'react';
import './BasketItem.css';
import Quantity from "../Quantity/Quantity.jsx";

const BasketItem = ({img, name, info, weight, price, sum}) => {
    return (
        <div className="item flex bg-black mb-2.5">
            <div className="item__img hidden md:flex">
                <img className="md:max-w-[7.5rem] lg:max-w-[11.25rem]" src={img} alt=""/>
            </div>
            <div className="item__info relative flex flex-col md:flex-row items-start md:items-center p-3 md:pl-6 md:pr-0 lg:pl-8 xl:pr-9 lg:pr-5 xl:pl-[4.563rem] w-full">
                <div className="item__name relative flex flex-col md:min-w-[12.375rem] lg:min-w-64 xl:min-w-[22.5rem]">
                    <p className="item__text text-white text-lg pl-12 md:pl-0 md:text-xl-m lg:text-xl">{name}</p>
                    <span className="item__subtext text-grey text-sm mb-3.5 md:mb-0 md:text-lg-m lg:text-lg mt-1">{info}</span>
                    <span
                        className="text-white text-base rounded bg-grey-dark absolute md:relative flex self-baseline md:mt-1.5 py-0.5 px-1.5">{weight} г</span>
                </div>
                <div className="flex justify-start md:justify-end w-full ml-auto">
                    <div className="item__price w-24 md:w-[6.75rem] flex flex-col md:block lg:w-[7.75rem] xl:w-[15.75rem]">
                        <span className="text-grey text-xs uppercase md:hidden">Цена:</span>
                        <span className="text-white text-2xl font-extrabold">{price} ₽</span>
                    </div>
                    <div className="mr-8 md:mr-0 md:w-[7.25rem] xl:w-[15.25rem]">
                        <Quantity />
                    </div>
                    <div className="item__amount md:mr-[2.625rem] flex flex-col md:block lg:mr-unset md:w-[6.75rem] lg:w-[7.75rem] xl:w-[15.75rem]">
                        <span className="text-grey text-xs uppercase md:hidden">Сумма:</span>
                        <span className="text-white text-2xl font-extrabold">{sum} ₽</span>
                    </div>
                    <div className="item__delete border border-red absolute lg:relative top-0 right-0"></div>
                </div>
            </div>
            {/*<div className="grid grid-cols-[22.5rem_auto] w-full">*/}
            {/*    <div className="item__name flex flex-col min-w-[22.5rem]">*/}
            {/*        <p className="item__text text-white text-xl">{name}</p>*/}
            {/*        <span className="item__subtext text-grey text-lg mt-1">{info}</span>*/}
            {/*        <span*/}
            {/*            className="text-white text-base rounded bg-grey-dark flex self-baseline mt-1.5 py-0.5 px-1.5">{weight} г</span>*/}
            {/*    </div>*/}
            {/*    <div className="grid grid-cols-[252px_244px_auto_42px]">*/}
            {/*        <div className="item__price">*/}
            {/*            <span className="text-white text-2xl font-extrabold">{price} ₽</span>*/}
            {/*        </div>*/}
            {/*        <Quantity/>*/}
            {/*        <div className="item__amount">*/}
            {/*            <span className="text-white text-2xl font-extrabold">{sum} ₽</span>*/}
            {/*        </div>*/}
            {/*        <div className="item__delete border border-red"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default BasketItem;