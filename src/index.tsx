import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./Redax/redux-store";
import {Provider} from "react-redux";




ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>,
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


reportWebVitals();
