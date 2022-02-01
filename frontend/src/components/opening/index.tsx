// react
import React, {FunctionComponent, useContext} from 'react';
// react-router-dom
import {NavigateFunction, useNavigate} from 'react-router-dom';
// context
import {UserContext} from "../../context";
// assets
import background from '../../assets/Background.png';

const Opening: FunctionComponent = (): JSX.Element => {
    const [state] = useContext(UserContext);
    const navigate: NavigateFunction = useNavigate();

    const handleOpenShop = (): void => {
        if (state && state.token) {
            navigate("/account");
        } else {
            navigate("/register");
        }
    }

    return (
        <section className="opening" id="whyus">
            <div className="opening__content">
                <h1 className="opening__header">Sell More!</h1>
                <p className="opening__text">Open shop on our platform and increase your sales</p>
                <button className="btn btn--cta" onClick={handleOpenShop}>Open your shop</button>
            </div>
            <img src={background} alt="BestShop Hero" className="opening__image"/>
        </section>
    )
};

export default Opening;