import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RootStateType, subscribe} from "./Redax/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {state} from './Redax/state'

const rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>,
        </BrowserRouter>,
        document.getElementById('root')
    );

}
rerenderEntireTree(state)
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
