import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvider from "./context/theme-context";

render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);