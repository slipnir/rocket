import React from 'react';
import classes from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs flex mb-9">
            <a href="/" className={`${classes.link} text-white text-base`}>Главная</a>
            <p className={`${classes.link} text-grey text-base`}>Корзина</p>
        </div>
    );
};

export default Breadcrumbs;