import { Button } from "@mui/material";
import * as React from "react";

export const Activation: React.FC = () => {
  const clickHandler = (status: boolean) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          message: "status",
          status,
        },
        function (response) {}
      );
    });
  };

  return (
    <>
      <Button onClick={() => clickHandler(false)}> Disabled</Button>
      <Button onClick={() => clickHandler(true)}>Active</Button>
    </>
  );
};
