import React from 'react';
import {Link} from 'react-router-dom';

const PricingProfessional = ({professional, handleSubscription}) => {
    return (
        <div className="pricing__box pricing__box--professional">
            <div className="pricing__details">
                <div className="pricing__type">{professional && professional.nickname}</div>
                <div className="pricing__price">{professional &&
                    (professional.unit_amount / 100).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}</div>
                <div className="pricing__limited">Limited offer</div>
            </div>
            <ul className="pricing__items">
                <li className="pricing__item">500 MB HDD</li>
                <li className="pricing__item">2 Subdomain</li>
                <li className="pricing__item">5 E-mails</li>
                <li className="pricing__item">One years licence</li>
                <li className="pricing__item pricing__item--not">Full support</li>
            </ul>
            <Link to="/login">
                <button onClick={() => handleSubscription(professional)} className="btn btn--primary">Begin</button>
            </Link>
        </div>
    );
};

export default PricingProfessional;