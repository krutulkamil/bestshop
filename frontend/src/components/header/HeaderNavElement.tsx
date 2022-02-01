// react
import React, {Dispatch, FunctionComponent, SetStateAction} from 'react';
// react-scroll
import {scroller} from "react-scroll";
import {INavElement} from "../../types";

interface Props {
    element: INavElement
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const HeaderNavElement: FunctionComponent<Props> = ({element, setIsOpen}): JSX.Element => {
    const {name, id, offset} = element;

    const handleClose = (section: string, offset: number) => e => {
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