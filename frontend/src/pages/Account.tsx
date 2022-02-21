// react
import React, {useState, useEffect, useContext, FunctionComponent} from 'react';
// react-router-dom
import {NavigateFunction, useNavigate} from 'react-router-dom';
// axios
import axios from 'axios';
// moment
import moment from "moment";
// icons
import {UserOutlined} from '@ant-design/icons';
// context
import {UserContext} from "../context";
// types
import {ISubscription} from "../types";


const Account: FunctionComponent = (): JSX.Element => {
    const [subscriptions, setSubscriptions] = useState([] as ISubscription[]);
    const [state] = useContext(UserContext);
    const navigate: NavigateFunction = useNavigate();

    console.log(subscriptions)

    useEffect(() => {
        const getSubscriptions = async (): Promise<void> => {
            const {data} = await axios.get("/subscriptions");
            setSubscriptions(data.data);
        }

        if (state && state.token) {
            getSubscriptions()
        }

    }, [state]);

    const manageSubscriptions = async (): Promise<void> => {
        const {data} = await axios.get("/customer-portal");
        window.open(data);
    };

    return (
        <div className="account__container">
            <div className="account__head">
                <div className="account__center">
                    <UserOutlined className="account__icon"/>
                    <h1 className="account__header">Account</h1>
                    <p className="account__text">Subscription status:</p>

                    {subscriptions && subscriptions.map((sub) => (
                        <div key={sub.id}>
                            <section className="plan__section">
                                <h4 className="plan__nickname">{sub.plan.nickname}</h4>
                                <h5 className="plan__price">{(sub.plan.amount / 100).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: sub.plan.currency
                                })}</h5>
                                <p className="plan__status">Status: {sub.status}</p>
                                <p className="plan__digits">Card last 4 digits: {sub.default_payment_method.card.last4}</p>
                                <p className="plan__period">Current period end: {" "}
                                    {moment(sub.current_period_end * 1000)
                                        .format('dddd, MMMM Do YYYY h:mm:ss a')}
                                </p>
                                <div className="plan__buttons">
                                    <button
                                        onClick={() => navigate(`/${sub.plan.nickname.toLowerCase()}`)}
                                        className="btn btn--access"
                                    >Access</button>
                                    <button
                                        className="btn btn--manage"
                                        onClick={manageSubscriptions}
                                    >Manage Subscription</button>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Account;