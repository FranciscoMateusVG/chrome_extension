import React from "react";
import ReactDOM from "react-dom/client";
import { Forms } from "./Forms";
import { universalAttributes, universalType } from "./atoms";
import { RecoilRoot } from "recoil";
import { Activation } from "./Activation";

import "./popup.css";
import { Injection } from "./Injection";

const App: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <Forms
          header="Choose your universal type:"
          type={{ id: "radio", options: ["embedded", "popup"] }}
          state={universalType}
        />
        <Forms
          header="Choose your attributes:"
          type={{
            id: "checkbox",
          }}
          state={universalAttributes}
        />

        <Activation />
        <div></div>
        <Injection />
      </RecoilRoot>
    </>
  );
};

const rootDiv = document.createElement("div");
rootDiv.id = "root";
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
