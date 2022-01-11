import React from 'react';
import {scroller} from "react-scroll";

const HeaderNavElement = ({element, setIsOpen}) => {
    const {name, id, offset} = element;

    const handleClose = (section, offset) => e => {
        scroller.scrollTo(`${section}`, {
            duration: 2000, delay: 100, offset: offset, smooth: 'easeInOutQuart'
        });

        setIsOpen(false);
    }

    return (
        <li className="nav__element">
            <a className="nav__link" onClick={handleClose(id, offset)}>{name}</a>
        </li>
    );
}


export default HeaderNavElement;