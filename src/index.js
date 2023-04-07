import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//source of truth
const root = document.getElementById("root");

//Inject the app component into the dom using react DOM

ReactDOM.render(<App />, root);
