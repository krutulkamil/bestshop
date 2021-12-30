import React from 'react';
import PricingBasic from "./PricingBasic";
import PricingProfessional from "./PricingProfessional";
import PricingPremium from "./PricingPremium";

const Pricing = () => {
    return (
        <section className="pricing container" id="pricing">
            <h2>Pricing</h2>
            <div className="pricing__boxes">
                <PricingBasic />
                <PricingProfessional />
                <PricingPremium />
            </div>
        </section>
    )
};

export default Pricing;