import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {setUpStore} from "./redux";
import {Provider} from "react-redux";

import App from './App';
import {history} from "./configs/urls";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setUpStore()
root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
