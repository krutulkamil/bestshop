// react
import React from 'react';
import ReactDOM from 'react-dom';
// webfont-loader
import WebfontLoader from '@dr-kobros/react-webfont-loader';
// context
import {UserProvider} from "./context";
// components
import App from './App';
// styles
import './scss/main.scss'

const fontConfig = {
    google: {
        families: ['Open Sans:300,400,600,700', 'Raleway:300,400,700,800'],
    }
};

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <WebfontLoader config={fontConfig}>
                <App/>
            </WebfontLoader>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
