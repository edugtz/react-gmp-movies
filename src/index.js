import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import App from "./pages/App/App";

import "./styles/styles.scss";

ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById("root")
);
