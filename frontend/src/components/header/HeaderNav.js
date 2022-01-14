import React from 'react';
import navigationConfig from '../../helpers/navigationConfig.js'
import HeaderNavElement from "./HeaderNavElement";
import {Link} from 'react-router-dom';
import {isAuth} from "../../helpers/functions";

const HeaderNav = ({setIsOpen}) => {

    const logout = () => {
        localStorage.removeItem('auth');
    };

    return (
        <ul className="header__nav">
            {navigationConfig.map(element => (
                <HeaderNavElement key={element.id} element={element} setIsOpen={setIsOpen} />
            ))}

            {isAuth() ? (
                <li className="nav__element">
                    <Link onClick={logout} to="/login" className="nav__link">Logout</Link>
                </li>
            ) : (
                <li className="nav__element">
                    <Link to="/login" className="nav__link">Login</Link>
                </li>
            )}
        </ul>
    );
};

export default HeaderNav;