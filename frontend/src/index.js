import React from 'react';
import ReactDOM from 'react-dom';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

import App from './App';
import './scss/main.scss'

const config = {
    google: {
        families: ['Open Sans:300,400,600,700', 'Raleway:300,400,700,800'],
    }
};

ReactDOM.render(
    <React.StrictMode>
        <WebfontLoader config={config}>
            <App/>
        </WebfontLoader>
    </React.StrictMode>,
    document.getElementById('root')
);
