import React from 'react';
import {Link} from 'react-router-dom';

const PricingBasic = ({basic, handleSubscription}) => {
    return (
        <div className="pricing__box pricing__box--basic">
            <div className="pricing__details">
                <div className="pricing__type">{basic && basic.nickname}</div>
                <div className="pricing__price">{basic &&
                    (basic.unit_amount / 100).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                })}</div>
            </div>
            <ul className="pricing__items">
                <li className="pricing__item">100 MB HDD</li>
                <li className="pricing__item">1 Subdomain</li>
                <li className="pricing__item">2 E-mails</li>
                <li className="pricing__item pricing__item--not">Two years licence</li>
                <li className="pricing__item pricing__item--not">Full support</li>
            </ul>
            <Link to="/login">
                <button onClick={() => handleSubscription(basic)} className="btn btn--red">Begin</button>
            </Link>

        </div>
    );
};

export default PricingBasic;