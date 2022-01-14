import React from 'react';

const PricingPremium = () => {
    return (
        <div className="pricing__box pricing__box--premium">
            <div className="pricing__details">
                <div className="pricing__type">Premium</div>
                <div className="pricing__price">$99</div>
                <div className="pricing__limited">Limited offer</div>
            </div>
            <ul className="pricing__items">
                <li className="pricing__item">2 GB HDD</li>
                <li className="pricing__item">5 Subdomain</li>
                <li className="pricing__item">20 E-mails</li>
                <li className="pricing__item">Two years licence</li>
                <li className="pricing__item">Full support</li>
            </ul>
            <a href="#" className="btn btn--green">Begin</a>
        </div>
    )
};

export default PricingPremium;