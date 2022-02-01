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
        <div style={{height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                <div style={{textAlign: "center"}}>
                    <UserOutlined style={{fontSize: "40px", paddingTop: "50px"}}/>
                    <h1 style={{fontWeight: 'bold'}}>Account</h1>
                    <p>Subscription status</p>

                    {subscriptions && subscriptions.map((sub) => (
                        <div key={sub.id}>
                            <section>
                                <hr />
                                <h4 style={{fontWeight: 'bold'}}>{sub.plan.nickname}</h4>
                                <h5>{(sub.plan.amount / 100).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: sub.plan.currency
                                })}</h5>
                                <p>Status: {sub.status}</p>
                                <p>Card last 4 digit: {sub.default_payment_method.card.last4}</p>
                                <p>Current period end: {" "}
                                    {moment(sub.current_period_end * 1000)
                                        .format('dddd, MMMM Do YYYY h:mm:ss a')}
                                </p>
                                <button
                                    onClick={() => navigate(`/${sub.plan.nickname.toLowerCase()}`)}
                                    className="btn btn--primary"
                                >Access</button>
                                <button
                                    className="btn btn--red"
                                    onClick={manageSubscriptions}
                                >Manage Subscription</button>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Account;