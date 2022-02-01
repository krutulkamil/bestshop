// react
import React, {FunctionComponent} from 'react';
// react-scroll
import {animateScroll} from 'react-scroll';
// components
import Navigation from './Navigation';

const Header: FunctionComponent = (): JSX.Element => {
    let scroll: typeof animateScroll = animateScroll;

    const handleTopScroll = (): void => {
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