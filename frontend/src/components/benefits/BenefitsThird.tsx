// react
import React, {FunctionComponent} from 'react';
// assets
import trumpet from "../../assets/Trumpet.png";

const BenefitsThird: FunctionComponent = (): JSX.Element => {
    return (
        <div className="benefits__double">
            <div className="benefits__single benefits__single--no-img">
                <div className="benefits__text">
                    <h2 className="benefits__title">Increase recognition<br /> your brand!</h2>
                    <p className="benefits__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>
            <div className="benefits__single benefits__single--trumpet">
                <img src={trumpet} alt="Increase recognition your brand!"/>
            </div>
        </div>
    );
};

export default BenefitsThird;
