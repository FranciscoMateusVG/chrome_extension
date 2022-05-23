import React from "react";
import { useRecoilState } from "recoil";
import {
  universalAttributes,
  universalTabsValue,
  universalType,
} from "../atoms";
import { Activation } from "./components/Activation";
import { Forms } from "./components/Forms";
import { Injection } from "./components/Injection";
import TabPanel from "./components/TabPanel";
import VerticalTabs from "./components/Tabs";

const Main: React.FC = () => {
  const [value, _] = useRecoilState(universalTabsValue);

  return (
    <>
      <VerticalTabs />
      <TabPanel value={value} index={0}>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
};

export default Main;
