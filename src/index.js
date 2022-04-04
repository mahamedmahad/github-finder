import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvider from "./context/theme-context";
import ResultProvider from './context/result-context';

render(
    <React.StrictMode>
        <ThemeProvider>
            <ResultProvider>
                <App/>
            </ResultProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);