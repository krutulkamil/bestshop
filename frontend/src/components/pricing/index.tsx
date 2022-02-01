// react
import React, {useState, useEffect, useContext, FunctionComponent} from 'react';
// react-router-dom
import {NavigateFunction, useNavigate} from 'react-router-dom';
// axios
import axios from 'axios';
// context
import {UserContext} from "../../context";
// components
import PricingBasic from "./PricingBasic";
import PricingProfessional from "./PricingProfessional";
import PricingPremium from "./PricingPremium";
// types
import {IPricing} from "../../types";

const Pricing: FunctionComponent = (): JSX.Element => {
    const [state] = useContext(UserContext);
    const [prices, setPrices] = useState([] as IPricing[]);
    const [userSubscriptions, setUserSubscriptions] = useState([] as string[]);

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        fetchPrices();
    }, []);

    useEffect(() => {
        let result: string[] = [];
        const check = (): string[] => state && state.user && state.user.subscriptions && state.user.subscriptions.map((sub) => {
            return result.push(sub.plan.id);
        });
        check();
        setUserSubscriptions(result);
    }, [state && state.user]);

    const fetchPrices = async (): Promise<void> => {
        const { data } = await axios.get('/prices');
        setPrices(data);
    }

    const handleSubscription = async (plan: IPricing): Promise<void> => {
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

    const buttonText = (plan: IPricing): string => {
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