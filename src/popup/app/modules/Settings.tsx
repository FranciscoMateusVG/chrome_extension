import React from "react";
import { universalType, universalAttributes } from "../../atoms";
import { Forms } from "../components/Forms";

const Settings: React.FC = () => {
  return (
    <>
      <Forms
        header="Choose your attributes:"
        type={{
          id: "checkbox",
        }}
        state={universalAttributes}
      />
    </>
  );
};

export default Settings;
