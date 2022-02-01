// react
import React, {FunctionComponent} from 'react';
// assets
import iphone from "../../assets/iPhone.png";

const BenefitsSecond: FunctionComponent = (): JSX.Element => {
    return (
        <div className="benefits__single benefits__single--iphone">
            <div className="benefits__text">
                <h2 className="benefits__title">Your shop is <br/>where you are!</h2>
                <p className="benefits__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam.
                </p>
            </div>
            <div className="benefits__image">
                <img src={iphone} alt="Your shop is where you are!" />
            </div>
        </div>
    );
};

export default BenefitsSecond;
