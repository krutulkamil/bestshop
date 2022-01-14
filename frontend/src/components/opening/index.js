import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {scroller} from "react-scroll";
import {UserContext} from "../../context";
import background from '../../assets/Background.png';

const Opening = () => {
    const [state] = useContext(UserContext);
    const navigate = useNavigate();

    const handleOpenShop = () => {
        if (state && state.token) {
            scroller.scrollTo("pricing", {
                duration: 2000, delay: 100, offset: -100, smooth: 'easeInOutQuart'
            })
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