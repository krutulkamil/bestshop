// react
import React, {FunctionComponent, useState} from 'react';
// components
import HeaderNav from "./HeaderNav";

const Navigation: FunctionComponent = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMenuOpen = (): void => {
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