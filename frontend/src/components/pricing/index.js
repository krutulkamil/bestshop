import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PricingBasic from "./PricingBasic";
import PricingProfessional from "./PricingProfessional";
import PricingPremium from "./PricingPremium";
import {UserContext} from "../../context";


const Pricing = () => {
    const [prices, setPrices] = useState([]);
    const [state] = useContext(UserContext);

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const { data } = await axios.get('/prices');
        setPrices(data);
    }

    const handleSubscription = (plan) => {
        console.log(plan.id);
    };

    const buttonText = () => {
        return state && state.token ? "Buy the plan" : "Sign up"
    };
    
    return (
        <section className="pricing container" id="pricing">
            <h2>Pricing</h2>
            <div className="pricing__boxes">
                <PricingBasic plan={prices[0]} handleSubscription={handleSubscription} buttonText={buttonText}/>
                <PricingProfessional plan={prices[1]} handleSubscription={handleSubscription} buttonText={buttonText}/>
                <PricingPremium plan={prices[2]} handleSubscription={handleSubscription} buttonText={buttonText}/>
            </div>
        </section>
    )
};

export default Pricing;