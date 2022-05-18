import { Button } from "@mui/material";
import * as React from "react";

export const Injection: React.FC = () => {
  const clickHandler = (injection: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          message: "injection",
          injection,
        },
        function (response) {}
      );
    });
  };

  return (
    <>
      <Button onClick={() => clickHandler("before")}> Before </Button>
      <Button onClick={() => clickHandler("inside")}> Inside </Button>
      <Button onClick={() => clickHandler("after")}> After </Button>
    </>
  );
};
