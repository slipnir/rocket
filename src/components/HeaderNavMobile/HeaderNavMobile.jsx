import React, { useState, useEffect } from 'react';
import classes from './HeaderNavMobile.module.css';
import MenuMobile from "../MenuMobile/MenuMobile.jsx";
import Menu from "../Menu/Menu.jsx";

const HeaderNavMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex items-center lg:block xl:hidden" onClick={toggleMenu}>
            <div className="flex cursor-pointer items-center">
                <div className="flex flex-col mr-3">
                    <span className={`${classes.burger} ${menuOpen ? classes.active : ''}`}></span>
                </div>
                <p className={`text-base hidden md:block uppercase ${menuOpen ? 'text-yellow' : 'text-white'}`}>Меню</p>
            </div>
            {menuOpen && (isMobile ? <Menu /> : <MenuMobile />)}
        </div>
    );
};

export default HeaderNavMobile;
