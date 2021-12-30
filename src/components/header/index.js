import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <a href="#" className="logo">BestShop</a>
                <Navigation />
            </div>
        </header>
    )
};

export default Header;