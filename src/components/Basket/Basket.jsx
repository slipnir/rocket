import React, { useState } from 'react';
import BasketItem from '../BasketItem/BasketItem.jsx';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import Result from "../Result/Result.jsx";

const Basket = () => {
    const initialItems = [
        {
            id: 1,
            img: '/public/images/basket_1.jpeg',
            info: '',
            name: 'Хачапури по-аджарски',
            weight: '80',
            price: 425,
            count: 1
        },
        {
            id: 2,
            img: '/public/images/basket_2.jpeg',
            info: '',
            name: 'Ланч низкокалорийный',
            weight: '80',
            price: 525,
            count: 2
        },
        {
            id: 3,
            img: '/public/images/basket_3.jpeg',
            info: 'Из баранины с тархуном',
            name: 'Хинкали жаренные',
            weight: '80',
            price: 115,
            count: 6
        },
        {
            id: 4,
            img: '/public/images/basket_4.jpeg',
            info: '',
            name: 'Оджахури из телятины',
            weight: '80',
            price: 355,
            count: 1
        },
        {
            id: 5,
            img: '/public/images/basket_5.jpeg',
            info: 'С бараниной',
            name: 'Долма',
            weight: '80',
            price: 490,
            count: 1
        },
    ];

    const [items, setItems] = useState(initialItems);

    const handleIncrease = (id) => {
        setItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };

    const handleDecrease = (id) => {
        setItems(prevItems => prevItems.map(item =>
            item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
        ));
    };

    const totalItems = items.reduce((total, item) => total + item.count, 0);

    return (
        <div className="container pt-36 m-auto">
            <h1 className="basket__title text-white text-4xl-m md:text-4xl mb-3">
                Корзина <sup className="text-yellow text-3xl-m md:text-3xl">{totalItems} шт</sup>
            </h1>
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
                            count={item.count}
                            handleIncrease={() => handleIncrease(item.id)}
                            handleDecrease={() => handleDecrease(item.id)}
                        />
                    ))}
                </div>
                <Result/>
            </div>
        </div>
    );
};

export default Basket;
