import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SettingsIcon from "@mui/icons-material/Settings";
import TerminalIcon from "@mui/icons-material/Terminal";
import { universalTabsValue } from "../../../atoms";
import { useRecoilState } from "recoil";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs: React.FC = () => {
  const [value, setValue] = useRecoilState(universalTabsValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          position: "absolute",
          left: "-90px",
        }}
      >
        <Tab icon={<SettingsIcon />} {...a11yProps(0)} />
        <Tab icon={<TerminalIcon />} {...a11yProps(1)} />
      </Tabs>
    </>
  );
};

export default VerticalTabs;
