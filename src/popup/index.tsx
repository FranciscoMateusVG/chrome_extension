import React from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";

const test = <img src="icon.png"></img>;

const rootDiv = document.createElement("div");
rootDiv.id = "root";
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(test);
