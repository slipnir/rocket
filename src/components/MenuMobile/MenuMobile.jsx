import React, {useEffect, useState} from 'react';
import MenuMobileLink from "../MenuMobileLink/MenuMobileLink.jsx";
import MenuActions from "../MenuActions/MenuActions.jsx";
import classes from './MenuMobile.module.css';

const MenuMobile = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            url: '/',
            img: '',
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

    return (
        <div className={`flex flex-wrap lg:flex-nowrap px-5 py-16 absolute backdrop-blur-xl bg-black/80 z-40 w-full justify-center left-0 ${classes.menu} ${isScrolled ? classes.scroll : ''}`}>
            <MenuActions />
            <div>
                <p className="text-grey-light uppercase mb-5">Горячее:</p>
                <div className="flex flex-col flex-wrap h-[16.25rem]">
                    <div>
                        {menuHot.map(item => (
                            <MenuMobileLink
                                key={item.id}
                                url={item.url}
                                img={item.img}
                                alt={item.alt}
                                name={item.name}
                            />
                        ))}
                    </div>
                    <div className="ml-[7.5rem]">
                        {menuOther.map(item => (
                            <MenuMobileLink
                                key={item.id}
                                url={item.url}
                                img={item.img}
                                alt={item.alt}
                                name={item.name}
                            />
                        ))}
                    </div>
                </div>
                <p className="text-grey-light uppercase mb-5">Холодное:</p>
                <div className="flex flex-col">
                    {menuCold.map(item => (
                        <MenuMobileLink
                            key={item.id}
                            url={item.url}
                            img={item.img}
                            alt={item.alt}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuMobile;