import React from 'react';
import navigationConfig from '../../helpers/navigationConfig.js'
import HeaderNavElement from "./HeaderNavElement";
import {Link} from 'react-router-dom';

const HeaderNav = ({setIsOpen}) => {

    return (
        <ul className="header__nav">
            {navigationConfig.map(element => (
                <HeaderNavElement key={element.id} element={element} setIsOpen={setIsOpen} />
            ))}
            <li className="nav__element">
                <Link to="/login" className="nav__link">Login</Link>
            </li>
        </ul>
    );
};

export default HeaderNav;