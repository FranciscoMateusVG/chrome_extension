import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { inject } from "./inject";

const App: React.FC = () => {
  const [element, setElement] = useState<any>("");
  const [active, setActive] = useState<boolean>(false);

  function processEvent(e) {
    const targetElement = e.target;
    if (window.status === "true") {
      setElement((previouseElement) => {
        if (previouseElement) previouseElement.style.border = "none";

        targetElement.style.border = "1px solid red";

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

  chrome.runtime.onMessage.addListener(
    // this is the message listener
    function (request, sender, sendResponse) {
      console.log(request);
      if (request.message === "status") {
        setActive(request.status);
      }
      if (request.message === "injection") {
        //inject(request.injection, element);
      }
      sendResponse("ok");
    }
  );

  return <></>;
};

const rootDiv = document.createElement("div");
rootDiv.id = "root";
document.body.appendChild(rootDiv);
document.addEventListener;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
