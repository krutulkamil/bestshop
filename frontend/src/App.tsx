// react
import React, {FunctionComponent, ReactNode} from 'react';
// react-router-dom
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
// react-toastify
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import {isAuth} from "./helpers/functions";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import StripeSuccess from './pages/StripeSuccess';
import StripeCancel from './pages/StripeCancel';
import Account from "./pages/Account";
import Basic from "./pages/plans/Basic";
import Professional from "./pages/plans/Professional";
import Premium from "./pages/plans/Premium";

const App: FunctionComponent = (): JSX.Element => {
    return (
        <Router>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/stripe/success" element={
                    <RequireAuth redirectTo="/login">
                        <StripeSuccess/>
                    </RequireAuth>
                }/>
                <Route path="/stripe/cancel" element={
                    <RequireAuth redirectTo="/login">
                        <StripeCancel/>
                    </RequireAuth>
                }/>
                <Route path="/account" element={
                    <RequireAuth redirectTo="/login">
                        <Account/>
                    </RequireAuth>
                }/>
                <Route path="/basic" element={
                    <RequireAuth redirectTo="/login">
                        <Basic/>
                    </RequireAuth>}/>
                <Route path="/professional" element={
                    <RequireAuth redirectTo="/login">
                        <Professional/>
                    </RequireAuth>}/>
                <Route path="/premium" element={
                    <RequireAuth redirectTo="/login">
                        <Premium/>
                    </RequireAuth>}/>
            </Routes>
        </Router>
    );
};

interface AuthProps {
    children: ReactNode,
    redirectTo: string
}

const RequireAuth: FunctionComponent<AuthProps> = ({children, redirectTo}): any => {
    let isAuthenticated = isAuth();
    return isAuthenticated ? children : <Navigate to={redirectTo}/>
}

export default App;
