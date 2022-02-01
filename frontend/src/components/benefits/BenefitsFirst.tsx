// react
import React, {FunctionComponent} from 'react';
// assets
import macbook from "../../assets/Macbook.png";

const BenefitsFirst: FunctionComponent = (): JSX.Element => {
    return (
        <div className="benefits__single benefits__single--notebook">
            <div className="benefits__text">
                <h2 className="benefits__title">Be always first</h2>
                <p className="benefits__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam.
                </p>
            </div>
            <div className="benefits__image">
                <img src={macbook} alt="Be always first" />
            </div>
        </div>
    );
};

export default BenefitsFirst;
