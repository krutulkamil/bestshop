// react
import React, {Dispatch, FunctionComponent, SetStateAction, useContext} from 'react';
// react-router-dom
import {Link} from 'react-router-dom';
// context
import {UserContext} from "../../context";
// nav-config
import navigationConfig from '../../helpers/navigationConfig'
// components
import HeaderNavElement from "./HeaderNavElement";

interface Props {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const HeaderNav: FunctionComponent<Props> = ({setIsOpen}): JSX.Element => {
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