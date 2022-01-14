import React from 'react';

const PricingBasic = ({plan, handleSubscription, buttonText}) => {
    return (
        <div className="pricing__box pricing__box--basic">
            <div className="pricing__details">
                <div className="pricing__type">{plan && plan.nickname}</div>
                <div className="pricing__price">{plan &&
                    (plan.unit_amount / 100).toLocaleString("en-US", {
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
                <button onClick={() => handleSubscription(plan)} className="btn btn--red">{buttonText()}</button>
        </div>
    );
};

export default PricingBasic;