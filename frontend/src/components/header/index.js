import React from 'react';
import Navigation from './Navigation';
import {animateScroll} from 'react-scroll';

const Header = () => {
    let scroll = animateScroll;

    const handleTopScroll = () => {
        scroll.scrollToTop({duration: 2000, delay: 100, smooth: 'easeInOutQuart'});
    };

    return (
        <header className="header">
            <div className="header__container container">
                <a className="logo" onClick={handleTopScroll}>BestShop</a>
                <Navigation />
            </div>
        </header>
    )
};

export default Header;