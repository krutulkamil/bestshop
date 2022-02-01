// react
import React, {useEffect, useContext, FunctionComponent} from 'react';
// react-router-dom
import {NavigateFunction, useLocation, useNavigate, Location} from 'react-router-dom';
// context
import {UserContext} from "../../context";

const Basic: FunctionComponent = (): JSX.Element => {
    const [state] = useContext(UserContext);
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        let result: string[] = [];
        const check = (): string[] => state && state.user && state.user.subscriptions && state.user.subscriptions.map((sub) => {
            return result.push(sub.plan.nickname.toLowerCase());
        });
        check();

        const plan: string = location.pathname.split('/')[1];
        if (result.length > 0 && !result.includes(plan)) {
            navigate('/')
        }

    }, [state && state.user]);

    return (
        <div>
            BASIC
        </div>
    );
};

export default Basic;
