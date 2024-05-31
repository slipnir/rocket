import React from 'react';
import BasketItem from '../BasketItem/BasketItem.jsx';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import Result from "../Result/Result.jsx";

const Basket = () => {
    const items = [
        {
            id: 1,
            img: '/public/images/basket_1.jpeg',
            info: '',
            name: 'Хачапури по-аджарски',
            weight: '80',
            price: '425',
            sum: '425'
        },
        {
            id: 2,
            img: '/public/images/basket_2.jpeg',
            info: '',
            name: 'Ланч низкокалорийный',
            weight: '80',
            price: '525',
            sum: '1050'
        },
        {
            id: 3,
            img: '/public/images/basket_3.jpeg',
            info: 'Из баранины с тархуном',
            name: 'Хинкали жаренные',
            weight: '80',
            price: '115',
            sum: '690'
        },
        {
            id: 4,
            img: '/public/images/basket_4.jpeg',
            info: '',
            name: 'Оджахури из телятины',
            weight: '80',
            price: '355',
            sum: '355'
        },
        {
            id: 5,
            img: '/public/images/basket_5.jpeg',
            info: 'С бараниной',
            name: 'Долма',
            weight: '80',
            price: '490',
            sum: '490'
        },
    ];

    return (
        <div className="container pt-36 m-auto">
            <h1 className="basket__title text-white text-4xl-m md:text-4xl mb-3">Корзина <sup className="text-yellow text-3xl-m md:text-3xl">5
                шт</sup></h1>
            <Breadcrumbs/>
            <div>
                <div className="basket__info mb-5 hidden md:flex">
                    <p className="text-grey text-base uppercase md:ml-[8.75rem] lg:ml-[13.2rem] xl:ml-[15.813rem] lg:min-w-64 xl:min-w-[22.5rem]">Блюдо:</p>
                    <div className="flex justify-end w-full lg:mr-[7.7rem] xl:mr-[16.85rem]">
                        <p className="text-grey text-base uppercase md:w-[6.75rem] lg:w-[7.75rem] xl:w-[15.75rem]">Цена:</p>
                        <p className="text-grey text-base uppercase md:w-[7.25rem] xl:w-[15.25rem]">Кол-во:</p>
                        <p className="text-grey text-base uppercase md:w-[6.75rem] md:mr-[2.625rem] lg:mr-0">Сумма:</p>
                    </div>
                </div>
                <div className="basket__list mb-11">
                    {items.map(item => (
                        <BasketItem
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            info={item.info}
                            weight={item.weight}
                            price={item.price}
                            sum={item.sum}
                        />
                    ))}
                </div>
                <Result/>
            </div>
        </div>
    );
};

export default Basket;