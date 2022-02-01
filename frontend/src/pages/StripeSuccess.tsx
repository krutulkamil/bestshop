// react
import React, {useEffect, useContext, FunctionComponent} from "react";
// react-router-dom
import {NavigateFunction, useNavigate} from 'react-router-dom';
// axios
import axios from "axios";
// icons
import {SyncOutlined} from "@ant-design/icons";
// context
import {UserContext} from "../context";
// types
import {IAuth} from "../types";

const StripeSuccess: FunctionComponent = (): JSX.Element => {
    const [state, setState] = useContext(UserContext)
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const getSubscriptionStatus = async (): Promise<void> => {
            const {data} = await axios.get("/subscription-status");
            if (data && data.length === 0) {
                navigate("/");

            } else {
                // update localstorage
                const auth: IAuth = JSON.parse(localStorage.getItem('auth'));
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