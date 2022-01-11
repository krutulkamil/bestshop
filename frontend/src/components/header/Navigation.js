import React, { useState } from 'react';
import HeaderNav from "./HeaderNav";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <input type="checkbox" className="menu__btn" id="menu__btn" onClick={handleMenuOpen} checked={isOpen}/>
            <label htmlFor="menu__btn" className="menu__toggle">
                <span/>
                <span/>
                <span/>
            </label>
            <HeaderNav setIsOpen={setIsOpen} />
        </nav>
    )
};

export default Navigation;