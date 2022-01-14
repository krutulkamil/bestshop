import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PricingBasic from "./PricingBasic";
import PricingProfessional from "./PricingProfessional";
import PricingPremium from "./PricingPremium";

const Pricing = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const { data } = await axios.get('/prices');
        setPrices(data);
    }

    const handleSubscription = (plan) => {

    };
    
    return (
        <section className="pricing container" id="pricing">
            <h2>Pricing</h2>
            <div className="pricing__boxes">
                <PricingBasic basic={prices[0]} handleSubscription={handleSubscription}/>
                <PricingProfessional professional={prices[1]} handleSubscription={handleSubscription}/>
                <PricingPremium premium={prices[2]} handleSubscription={handleSubscription}/>
            </div>
        </section>
    )
};

export default Pricing;