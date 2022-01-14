import React from "react";
import {WarningTwoTone} from "@ant-design/icons";

const StripeCancel = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold', height: "90vh"}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <WarningTwoTone style={{fontSize: "50px"}}/>
            </div>
        </div>
    )
};

export default StripeCancel;