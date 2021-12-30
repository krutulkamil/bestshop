import React from 'react';

const PricingBasic = () => {
    return (
        <div className="pricing__box pricing__box--basic">
            <div className="pricing__details">
                <div className="pricing__type">Basic</div>
                <div className="pricing__price">$0</div>
            </div>
            <ul className="pricing__items">
                <li className="pricing__item">100 MB HDD</li>
                <li className="pricing__item">1 Subdomain</li>
                <li className="pricing__item">2 E-mails</li>
                <li className="pricing__item pricing__item--not">Two years licence</li>
                <li className="pricing__item pricing__item--not">Full support</li>
            </ul>
            <a href="#" className="btn btn--red">Begin</a>
        </div>
    );
};

export default PricingBasic;