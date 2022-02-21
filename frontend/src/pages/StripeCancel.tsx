// react
import React, {FunctionComponent} from "react";
// icons
import {WarningTwoTone} from "@ant-design/icons";

const StripeCancel: FunctionComponent = (): JSX.Element => {
    return (
        <div className="stripe__container">
            <div className="stripe__center">
                <WarningTwoTone className="stripe__icon"/>
            </div>
        </div>
    )
};

export default StripeCancel;