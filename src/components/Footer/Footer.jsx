import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-36 bg-black">
            <div className="container m-auto">
                <div className="flex relative pb-9 pt-12 border-b-[1px] border-grey-dark">
                    <div className="flex flex-wrap items-end flex-1 lg:flex-nowrap">
                        <div className="footer__logo mb-16 md:mb-8 lg:mb-0 lg:mr-14 xl:mr-[7.375rem]">
                            <img className="max-w-[8.438rem]" src="/public/logo.svg" alt="Футер лого"/>
                        </div>
                        <div className="footer__links">
                            <ul className="flex flex-wrap columns-2 md:flex-nowrap">
                                <li className="text-white text-sm-m md:text-base underline mr-7 xl:mr-12">
                                    <a href="">Обратная связь</a>
                                </li>
                                <li className="text-white text-sm-m md:text-base underline mr-7 xl:mr-12">
                                    <a href="">Доставка</a>
                                </li>
                                <li className="text-white text-sm-m md:text-base underline mr-7 xl:mr-12">
                                    <a href="">Оплата</a>
                                </li>
                                <li className="text-white text-sm-m md:text-base underline">
                                    <a href="">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__info absolute bottom-[4.375rem] md:bottom-auto md:relative ml-auto flex md:items-start lg:items-end">
                        <a className="text-white text-lg md:text-xl" href="tel:+74998416729">+7 (499) 841-67-29</a>
                        <a className="text-white text-sm-m md:text-sm underline ml-7"
                           href="mailto:delivery@midas.rest">delivery@midas.rest</a>
                    </div>
                </div>
                <div className="flex pt-7 pb-[2.125rem] flex-wrap lg:flex-nowrap">
                    <p className="text-white text-sm-m md:text-sm md:w-full mb-6 lg:mb-0 lg:w-auto">© 2009–2019, ООО «MIDAS»,
                        официальный сайт</p>
                    <a className="text-white text-sm-m md:text-sm underline mb-6 md:mb-0 lg:ml-auto" href="">Политика конфиденциальности и
                        оферта</a>
                    <a className="text-white text-sm-m md:text-sm underline md:ml-11" href="">Пользовательское соглашение</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;