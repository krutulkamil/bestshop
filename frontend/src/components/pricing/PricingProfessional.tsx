// react
import React, {FunctionComponent} from 'react';
import {IPricing} from "../../types";

interface Props {
    plan: IPricing;
    handleSubscription: (plan: IPricing) => Promise<void>
    buttonText: (plan: IPricing) => string
}

const PricingProfessional: FunctionComponent<Props> = ({plan, handleSubscription, buttonText}): JSX.Element => {
    return (
        <div className="pricing__box pricing__box--professional">
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
                <li className="pricing__item">500 MB HDD</li>
                <li className="pricing__item">2 Subdomain</li>
                <li className="pricing__item">5 E-mails</li>
                <li className="pricing__item">One years licence</li>
                <li className="pricing__item pricing__item--not">Full support</li>
            </ul>
                <button
                    onClick={() => handleSubscription(plan)}
                    className="btn btn--primary">
                    {plan && buttonText(plan)}
                </button>
        </div>
    );
};

export default PricingProfessional;