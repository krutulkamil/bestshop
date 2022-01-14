import React, {useContext} from 'react';
import navigationConfig from '../../helpers/navigationConfig.js'
import HeaderNavElement from "./HeaderNavElement";
import {Link} from 'react-router-dom';
import {UserContext} from "../../context";

const HeaderNav = ({setIsOpen}) => {
    const [state, setState] = useContext(UserContext);

    const logout = () => {
        setState({
            user: {},
            token: ""
        })
        localStorage.removeItem('auth');
    };

    return (
        <ul className="header__nav">
            {navigationConfig.map(element => (
                <HeaderNavElement key={element.id} element={element} setIsOpen={setIsOpen} />
            ))}

            {state && state.user.name ? (
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