import React from 'react';
import classes from './HeaderLinks.module.css'
import UiInput from "../UI/UiInput/UiInput.jsx";

const HeaderLinks = () => {
    return (
        <div className="header__links ml-auto flex items-center">
            <div className={`${classes.header__search} flex relative hidden md:flex`}>
                <div className={classes.hidden}>
                    <UiInput
                        placeholder="Поиск блюда"
                        labelFor="search"
                        ariaLabel="Поиск"
                        className="absolute right-0 bottom-0.5 py-2"
                    />
                </div>
                <span className={`${classes.icon}`} aria-label="Поиск"></span>
            </div>
            <a href="/" className={`${classes.header__profile} ml-10`}></a>
            <div className="flex relative">
                <span
                    className="text-black text-base border-2 border-black rounded bg-yellow absolute px-1.5 right-3 bottom-4 z-10">5</span>
                <a href="/" className={`${classes.header__basket} ml-10`}></a>
            </div>
        </div>
    );
};

export default HeaderLinks;