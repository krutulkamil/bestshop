import React, { useState } from 'react';
import HeaderNav from "./HeaderNav";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <input type="checkbox" className="menu__btn" id="menu__btn" onClick={handleMenu}/>
            <label htmlFor="menu__btn" className="menu__toggle">
                <span/>
                <span/>
                <span/>
            </label>
            <HeaderNav />
        </nav>
    )
};

export default Navigation;