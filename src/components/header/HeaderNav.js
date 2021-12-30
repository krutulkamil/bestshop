import React from 'react';
import navigationConfig from '../../helpers/navigationConfig.js'
import HeaderNavElement from "./HeaderNavElement";

const HeaderNav = ({setIsOpen}) => {

    return (
        <ul className="header__nav">
            {navigationConfig.map(element => (
                <HeaderNavElement key={element.id} element={element} setIsOpen={setIsOpen} />
            ))}
        </ul>
    );
};

export default HeaderNav;