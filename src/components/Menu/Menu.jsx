import React, { useState } from 'react';
import UiInput from "../UI/UiInput/UiInput.jsx";
import MenuMobileLink from "../MenuMobileLink/MenuMobileLink.jsx";
import classes from './Menu.module.css';

const Menu = () => {
    const [openSection, setOpenSection] = useState(null);

    const menuHot = [
        {
            id: 1,
            url: '/',
            img: '/public/images/meals/meal_1.png',
            alt: 'Горячие блюда',
            name: 'Горячие блюда'
        },
        {
            id: 2,
            url: '/',
            img: '/public/images/meals/meal_2.png',
            alt: 'Супы',
            name: 'Супы'
        },
        {
            id: 3,
            url: '/',
            img: '/public/images/meals/meal_3.png',
            alt: 'Хинкали',
            name: 'Хинкали'
        }
    ];

    const menuCold = [
        {
            id: 1,
            url: '/',
            img: '/public/images/meals/meal_4.png',
            alt: 'Холодные закуски',
            name: 'Холодные закуски'
        },
        {
            id: 2,
            url: '/',
            img: '/public/images/meals/meal_5.png',
            alt: 'Салаты',
            name: 'Салаты'
        },
        {
            id: 3,
            url: '',
            alt: 'Соусы',
            name: 'Соусы'
        }
    ];

    const menuOther = [
        {
            id: 1,
            url: '/',
            img: '/public/images/meals/meal_6.png',
            alt: 'Свежая выпечка',
            name: 'Свежая выпечка'
        },
        {
            id: 2,
            url: '/',
            img: '/public/images/meals/meal_7.png',
            alt: 'Десерты',
            name: 'Десерты'
        },
        {
            id: 3,
            url: '/',
            img: '/public/images/meals/meal_8.png',
            alt: 'Напитки',
            name: 'Напитки'
        }
    ];

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="absolute w-full flex flex-col backdrop-blur-xl bg-black/80 left-0 top-[6.25rem] py-[1.063rem] px-[0.938rem]">
            <UiInput className="h-[2.625rem]" placeholder="Поиск блюда" />
            <div className="px-[3rem]">
                <a className={`text-white text-lg-m pl-[3.7rem] mt-6 mb-4 uppercase ${classes.icon__fire}`}
                   href="/">Акции</a>
                <div onClick={() => toggleSection('hot')} className="cursor-pointer">
                    <p
                        className={`text-grey text-lg-m pl-[3.7rem] mb-4 uppercase ${classes.icon}`}
                    >
                        Горячее <sup className="text-xs text-yellow">3шт</sup>
                    </p>
                    <div className={openSection === 'hot' ? 'hidden' : 'flex flex-col'}>
                        {menuHot.map(item => (
                            <MenuMobileLink
                                key={item.id}
                                url={item.url}
                                img={item.img}
                                alt={item.alt}
                                name={item.name}
                                className="h-[2.438rem]"
                                classSpan="text-lg-m ml-5"
                                classImg="w-[2.438rem]"
                            />
                        ))}
                    </div>
                </div>
                <div onClick={() => toggleSection('cold')} className="cursor-pointer">
                    <p
                        className={`text-grey text-lg-m pl-[3.7rem] mb-4 uppercase ${classes.icon}`}
                    >
                        Холодное <sup className="text-xs text-yellow">3шт</sup>
                    </p>
                    <div className={openSection === 'cold' ? 'hidden' : 'flex flex-col'}>
                        {menuCold.map(item => (
                            <MenuMobileLink
                                key={item.id}
                                url={item.url}
                                img={item.img}
                                alt={item.alt}
                                name={item.name}
                                className="h-[2.438rem]"
                                classSpan="text-lg-m ml-5"
                                classImg="w-[2.438rem]"
                            />
                        ))}
                    </div>
                </div>
                <div>
                    {menuOther.map(item => (
                        <MenuMobileLink
                            key={item.id}
                            url={item.url}
                            img={item.img}
                            alt={item.alt}
                            name={item.name}
                            className="h-[2.438rem]"
                            classSpan="text-lg-m ml-5"
                            classImg="w-[2.438rem]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
