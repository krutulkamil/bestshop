import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import MainContent from "./components/main";
import Opening from "./components/opening";
import Statistics from "./components/statistics";
import Benefits from "./components/benefits";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
