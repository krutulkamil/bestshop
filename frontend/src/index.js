import React from 'react';
import ReactDOM from 'react-dom';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import {UserProvider} from "./context";

import App from './App';
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
