import React, {useEffect, useContext} from 'react';
import {UserContext} from "../../context";
import {useLocation, useNavigate} from "react-router-dom";

const Premium = () => {
    const [state] = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let result = [];
        const check = () => state && state.user && state.user.subscriptions && state.user.subscriptions.map((sub) => {
            return result.push(sub.plan.nickname.toLowerCase());
        });
        check();

        const plan = location.pathname.split('/')[1].toUpperCase();
        if (result && !result.includes(plan)) {
            navigate('/')
        }

    }, [state && state.user]);

    return (
        <div>
            PREMIUM
        </div>
    );
};

export default Premium;