import React from "react";
import ReactDOM from "react-dom/client";
import { Forms } from "./Forms";
import { universalAttributes, universalType } from "./atoms";
import "./popup.css";
import { RecoilRoot } from "recoil";
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
      </RecoilRoot>
    </>
  );
};

const rootDiv = document.createElement("div");
rootDiv.id = "root";
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
