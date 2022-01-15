import React from 'react';

const PricingPremium = ({plan, handleSubscription, buttonText}) => {
    return (
        <div className="pricing__box pricing__box--premium">
            <div className="pricing__details">
                <div className="pricing__type">{plan && plan.nickname}</div>
                <div className="pricing__price">{plan &&
                    (plan.unit_amount / 100).toLocaleString("en-US", {
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
                <button
                    onClick={() => handleSubscription(plan)}
                    className="btn btn--green">
                    {plan && buttonText(plan)}
                </button>
        </div>
    )
};

export default PricingPremium;