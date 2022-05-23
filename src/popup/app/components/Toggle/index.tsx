import { Switch } from "@mui/material";
import * as React from "react";
import { useRecoilState } from "recoil";
import { universalActiveValue } from "../../../atoms";

export const ToggleButton: React.FC = () => {
  const [value, setValue] = useRecoilState(universalActiveValue);

  const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked;
    setValue(status);
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

  const label = {
    inputProps: { "aria-label": "Switch demo" },
    defaultChecked: value,
  };

  return (
    <>
      <Switch {...label} onChange={clickHandler} color="warning" />
    </>
  );
};
