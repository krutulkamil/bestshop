import React from 'react';

import BenefitsFirst from "./BenefitsFirst";
import BenefitsSecond from "./BenefitsSecond";
import BenefitsThird from "./BenefitsThird";

const Benefits = () => {
    return (
        <section className="benefits" id="benefits">
            <div className="benefits__container container">
                <BenefitsFirst />
                <BenefitsSecond />
                <BenefitsThird />
            </div>
        </section>
    )
};

export default Benefits;