import { Card } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./contentScript.css";
import { injection } from "./inject";

const App: React.FC = () => {
  document.body.addEventListener("click", processEvent);
  const [idProp, setId] = useState("");
  const [classProp, setClass] = useState("");
  const [parentProp, setParent] = useState("");
  function processEvent(e) {
    const id = e.target.id;
    const className = e.target.className;

    if (idProp) {
      document.getElementById(idProp).style.border = "none";
    }

    if (classProp) {
      const collection = document.getElementsByClassName(classProp);
      console.log(collection[0]);
      collection[0].setAttribute("style", "border:none;");
    }

    setId(id);
    setClass(className);

    if (id) {
      document.getElementById(id).style.border = "3px solid red";
    }

    if (className) {
      const collection = document.getElementsByClassName(className);
      console.log(collection[0]);
      collection[0].setAttribute("style", "border:3px solid blue;");
    }
  }

  const handleInjection = () => {
    if (idProp) {
      injection(
        idProp,
        '{"icon":"","widgetBrandColor":"","backgroundColor":"","mode":"","layout":"","font":"","size":""}'
      );
    }

    if (classProp) {
      injection(
        classProp,
        '{"icon":"","widgetBrandColor":"","backgroundColor":"","mode":"","layout":"","font":"","size":""}'
      );
    }
  };

  const handleParent = () => {
    if (idProp) {
      const parent = document.getElementById(idProp).parentElement;
      setParent(parent.id || parent.className);
      parent.style.border = "border:3px solid green;";
    }

    if (classProp) {
      const parent =
        document.getElementsByClassName(classProp)[0].parentElement;
      setParent(parent.id || parent.className);

      parent.setAttribute("style", "border:3px solid green;");
    }
  };

  return (
    <Card className="overlayCard">
      <div>Id: {idProp}</div>
      <div>Class: {classProp}</div>
      <div>Parent: {parentProp}</div>
      <button onClick={handleInjection}> Inject! </button>
      <button onClick={handleParent}> Parent up! </button>
    </Card>
  );
};

const rootDiv = document.createElement("div");
rootDiv.id = "root";
document.body.appendChild(rootDiv);
document.addEventListener;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
