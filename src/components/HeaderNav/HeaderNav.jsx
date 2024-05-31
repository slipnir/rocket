import React from 'react';
import classes from './HeaderNav.module.css';

const HeaderNav = () => {
    return (
        <nav className="header__nav flex items-center hidden xl:block">
            <ul className="flex">
                <li className="text-white text-sm uppercase mr-12">
                    <a className={`flex items-center relative pr-5 ${classes.fire}`} href="">Акции</a>
                </li>
                <li className={`text-white text-sm uppercase relative pr-3 flex items-center mr-10 ${classes.arrow}`}>Горячее</li>
                <li className={`text-white text-sm uppercase relative pr-3 flex items-center mr-10 ${classes.arrow}`}>Холодное</li>
                <li className="text-white text-sm uppercase mr-10">
                    <a href="">Свежая выпечка</a>
                </li>
                <li className="text-white text-sm uppercase mr-12">
                    <a href="">Десерты</a>
                </li>
                <li className="text-white text-sm uppercase">
                    <a href="">Напитки</a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;