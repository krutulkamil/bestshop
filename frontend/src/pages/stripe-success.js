import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {SyncOutlined} from "@ant-design/icons";
import {useNavigate} from 'react-router-dom';
import {UserContext} from "../context";

const StripeSuccess = () => {
    const [state] = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        const getSubscriptionStatus = async () => {
            const {data} = await axios.get("/subscription-status");
            console.log("SUBSRIPTION", data);
            if (data && data.length === 0) {
                navigate("/");

            } else {
                navigate("/account");
            }
        };

        if (state && state.token) {
            getSubscriptionStatus()
        }
    }, [state]);

    return (
        <div style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold', height: "90vh"}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <SyncOutlined spin style={{fontSize: "50px"}}/>
            </div>
        </div>
    )
};

export default StripeSuccess;