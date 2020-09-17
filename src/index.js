import React from "react";
import ReactDOM from "react-dom";
import store from './store'
import { Provider } from 'react-redux';

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import App from "./pages/App/App";

import "./styles/styles.scss";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>,
    document.getElementById("root")
);
