import React from "react";
import { useRecoilState } from "recoil";
import { universalTabsValue } from "../atoms";
import Activation from "./modules/Activation";
import TabPanel from "./components/TabPanel";
import VerticalTabs from "./components/Tabs";
import Settings from "./modules/Settings";

const Main: React.FC = () => {
  const [value, _] = useRecoilState(universalTabsValue);

  return (
    <>
      <VerticalTabs />
      <TabPanel value={value} index={0}>
        <Activation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Settings />
      </TabPanel>
    </>
  );
};

export default Main;
