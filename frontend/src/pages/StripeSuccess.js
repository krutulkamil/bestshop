import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {SyncOutlined} from "@ant-design/icons";
import {useNavigate} from 'react-router-dom';
import {UserContext} from "../context";

const StripeSuccess = () => {
    const [state, setState] = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        const getSubscriptionStatus = async () => {
            const {data} = await axios.get("/subscription-status");
            if (data && data.length === 0) {
                navigate("/");

            } else {
                // update localstorage
                const auth = JSON.parse(localStorage.getItem('auth'));
                auth.user = data;
                localStorage.setItem('auth', JSON.stringify(auth));

                // update state (context);
                setState(auth);
                setTimeout(() => {
                    navigate("/account");
                }, 1000);
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