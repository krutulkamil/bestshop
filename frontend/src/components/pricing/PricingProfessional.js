import React from 'react';

const PricingProfessional = () => {
    return (
        <div className="pricing__box pricing__box--professional">
            <div className="pricing__details">
                <div className="pricing__type">Professional</div>
                <div className="pricing__price">$25</div>
                <div className="pricing__limited">Limited offer</div>
            </div>
            <ul className="pricing__items">
                <li className="pricing__item">500 MB HDD</li>
                <li className="pricing__item">2 Subdomain</li>
                <li className="pricing__item">5 E-mails</li>
                <li className="pricing__item">One years licence</li>
                <li className="pricing__item pricing__item--not">Full support</li>
            </ul>
            <a href="#" className="btn btn--primary">Begin</a>
        </div>
    );
};

export default PricingProfessional;