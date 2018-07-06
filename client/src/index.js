import React from "react";
import ReactDOM from "react-dom";
import './master/normalize.css';
import "./master/main.css";
import App from "./master/App";
import registerServiceWorker from "./master/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
