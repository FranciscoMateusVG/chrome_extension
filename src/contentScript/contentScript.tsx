import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Attributes } from "../utils/classes";
import { getStoredAttributes } from "../utils/storage";
import { inject } from "./inject";

const App: React.FC = () => {
  const [element, setElement] = useState<any>("");
  const [attributes, setAttributes] = useState<any>("");
  const [where, setWhere] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  function processEvent(e) {
    const targetElement = e.target;
    if (window.status === "true") {
      setElement((previouseElement) => {
        if (previouseElement) previouseElement.style.border = "none";

        targetElement.style.border = "2px dashed red";

        return targetElement;
      });
    }
  }

  useEffect(() => {
    if (!active) {
      if (element) {
        element.style.border = "none";
        setElement("");
      }
      window.status = "false";
      document.body.removeEventListener("click", processEvent);
    } else {
      window.status = "true";
      document.body.addEventListener("click", processEvent);
    }
  }, [active]);

  useEffect(() => {
    if (attributes && where && element) {
      inject(where, element, attributes);
      element.style.border = "none";
    }
  }, [attributes, where]);

  useEffect(() => {
    chrome.runtime.onMessage.addListener(
      // this is the message listener
      function (request, sender, sendResponse) {
        console.log("active");
        if (request.message === "status") setActive(request.status);

        if (request.message === "injection")
          getStoredAttributes().then((result) => {
            const attributes = new Attributes(result);
            attributes.fill();
            setAttributes(attributes);
            setWhere(request.injection);
          });

        sendResponse("ok");
      }
    );
  }, []);

  return <></>;
};

const rootDiv = document.createElement("div");
rootDiv.id = "extension";
document.body.appendChild(rootDiv);
document.addEventListener;

const root = ReactDOM.createRoot(document.getElementById("extension"));
root.render(<App />);
