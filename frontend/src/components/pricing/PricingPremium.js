import React from 'react';
import {Link} from 'react-router-dom';

const PricingPremium = ({premium, handleSubscription}) => {
    return (
        <div className="pricing__box pricing__box--premium">
            <div className="pricing__details">
                <div className="pricing__type">{premium && premium.nickname}</div>
                <div className="pricing__price">{premium &&
                    (premium.unit_amount / 100).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}</div>
                <div className="pricing__limited">Limited offer</div>
            </div>
            <ul className="pricing__items">
                <li className="pricing__item">2 GB HDD</li>
                <li className="pricing__item">5 Subdomain</li>
                <li className="pricing__item">20 E-mails</li>
                <li className="pricing__item">Two years licence</li>
                <li className="pricing__item">Full support</li>
            </ul>
            <Link to="/login">
                <button onClick={() => handleSubscription(premium)} className="btn btn--green">Begin</button>
            </Link>
        </div>
    )
};

export default PricingPremium;