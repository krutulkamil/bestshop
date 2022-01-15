import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {UserContext} from "../../context";
import PricingBasic from "./PricingBasic";
import PricingProfessional from "./PricingProfessional";
import PricingPremium from "./PricingPremium";

const Pricing = () => {
    const [state] = useContext(UserContext);
    const [prices, setPrices] = useState([]);
    const [userSubscriptions, setUserSubscriptions] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchPrices();
    }, []);

    useEffect(() => {
        let result = [];
        const check = () => state && state.user && state.user.subscriptions && state.user.subscriptions.map((sub) => {
            return result.push(sub.plan.id);
        });
        check();
        setUserSubscriptions(result);
    }, [state && state.user]);

    const fetchPrices = async () => {
        const { data } = await axios.get('/prices');
        setPrices(data);
    }

    const handleSubscription = async (plan) => {
        if (userSubscriptions && userSubscriptions.includes(plan.id)) {
            navigate(`/${plan.nickname.toLowerCase()}`);
            return;
        }
        if (state && state.token) {
            const {data} = await axios.post('/create-subscription', {
                priceId: plan.id,
            });
            window.open(data);
        } else {
            navigate("/register")
        }
    };

    const buttonText = (plan) => {
        if (state && state.token) {
            if (userSubscriptions && userSubscriptions.includes(plan.id)) {
                return "Access plan"
            }
            return "Buy the plan"
        } else {
            return "Sign in"
        }
    };
    
    return (
        <section className="pricing container" id="pricing">
            <h2>Pricing</h2>
            <div className="pricing__boxes">
                <PricingBasic
                    plan={prices[0]}
                    handleSubscription={handleSubscription}
                    buttonText={buttonText}
                />
                <PricingProfessional
                    plan={prices[1]}
                    handleSubscription={handleSubscription}
                    buttonText={buttonText}
                />
                <PricingPremium
                    plan={prices[2]}
                    handleSubscription={handleSubscription}
                    buttonText={buttonText}
                />
            </div>
        </section>
    )
};

export default Pricing;