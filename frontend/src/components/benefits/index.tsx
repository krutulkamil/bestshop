// react
import React, {FunctionComponent} from 'react';
// components
import BenefitsFirst from "./BenefitsFirst";
import BenefitsSecond from "./BenefitsSecond";
import BenefitsThird from "./BenefitsThird";

const Benefits: FunctionComponent = (): JSX.Element => {
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