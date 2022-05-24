import React from "react";
import { useRecoilState } from "recoil";
import { darkMode, layoutVerical, noIcon } from "../../atoms";
import Card from "../components/Card";
import CheckBox from "../components/CheckBox";

const Settings: React.FC = () => {
  const [noIconValue, setNoIcon] = useRecoilState(noIcon);
  const [darkModeValue, setDarkMode] = useRecoilState(darkMode);
  const [layoutVericalValue, setLayoutVerical] = useRecoilState(layoutVerical);

  return (
    <>
      <Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CheckBox
            label="No Icon"
            checked={noIconValue}
            setValue={setNoIcon}
          />
          <CheckBox
            label="Dark Mode"
            checked={darkModeValue}
            setValue={setDarkMode}
          />
          <CheckBox
            label="Layout Vertical"
            checked={layoutVericalValue}
            setValue={setLayoutVerical}
          />
        </div>
      </Card>
    </>
  );
};

export default Settings;
