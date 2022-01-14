import React, {useState, useEffect} from "react";
import axios from "axios";
import {SyncOutlined} from "@ant-design/icons";

const StripeSuccess = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold', height: "90vh"}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <SyncOutlined spin style={{fontSize: "50px"}}/>
            </div>
        </div>
    )
};

export default StripeSuccess;