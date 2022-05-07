import React from "react";
import ReactDOM from "react-dom/client";
import "./options.css";

const App: React.FC = () => {
  return (
    <>
      <p> ZAWARUDO</p>
    </>
  );
};

const rootDiv = document.createElement("div");
rootDiv.id = "root";
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
