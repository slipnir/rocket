import React, { useState, useEffect } from 'react';
import HeaderNav from "../HeaderNav/HeaderNav.jsx";
import HeaderLinks from "../HeaderLinks/HeaderLinks.jsx";
import HeaderNavMobile from "../HeaderNavMobile/HeaderNavMobile.jsx";
import classes from './Header.module.css';

const Header = () => {
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

    return (
        <header className={`fixed w-full z-20 ${classes.header}`}>
            <div className={`container m-auto flex xl:justify-between ${classes.header__container} ${isScrolled ? classes.scroll : ''}`}>
                <div className="header__logo flex mr-14 md:mr-[5.25rem] xl:mr-auto">
                    <img src="/public/logo.svg" alt="Логотип" />
                </div>
                <HeaderNav />
                <HeaderNavMobile />
                <HeaderLinks />
            </div>
        </header>
    );
};

export default Header;
