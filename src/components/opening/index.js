import React from 'react';
import background from '../../assets/Background.png';

const Opening = () => {
    return (
        <section className="opening" id="whyus">
            <div className="opening__content">
                <h1 className="opening__header">Sell More!</h1>
                <p className="opening__text">Open shop on our platform and increase your sales</p>
                <a href="#" className="btn btn--cta">Open your shop</a>
            </div>
            <img src={background} alt="" className="opening__image" />
        </section>
    )
};

export default Opening;