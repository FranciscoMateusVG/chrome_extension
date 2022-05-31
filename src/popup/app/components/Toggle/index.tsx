import { Switch } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  getStoredAttributes,
  setStoredAttribute,
} from "../../../../utils/storage";
import { universalActiveValue } from "../../../atoms";

export const ToggleButton: React.FC = () => {
  const [value, setValue] = useRecoilState(universalActiveValue);

  const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("cliquei aqui");
    const status = e.target.checked;
    setValue(status);
    setStoredAttribute("active", `${status}`);
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
