// react
import React, {useState, useEffect, createContext, FunctionComponent, ReactNode} from 'react';
// axios
import axios from 'axios';
// types
import {IAuth} from "../types";

interface AuthInitialState {
    user: any,
    token: ""
}

type AppContext = [IAuth | AuthInitialState, React.Dispatch<React.SetStateAction<IAuth | AuthInitialState>>];

const UserContext = createContext<AppContext | null>(null);

interface UserProviderProps {
    children: ReactNode
}

const UserProvider: FunctionComponent<UserProviderProps> = ({ children }): JSX.Element => {
    const [state, setState] = useState<IAuth | AuthInitialState>({
        user: {},
        token: ""
    });

    useEffect(() => {
        setState(JSON.parse(localStorage.getItem('auth')));
    }, []);

    // axios config
    const token: string = state && state.token ? state.token : "";
    axios.defaults.baseURL = process.env.REACT_APP_API;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    )
};

export { UserContext, UserProvider };