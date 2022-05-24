import Card from "@mui/material/Card";
import { Checkbox, FormControlLabel } from "@mui/material";
import * as React from "react";
import { SetterOrUpdater } from "recoil";
import { pink } from "@mui/material/colors";
import { setStoredAttribute } from "../../../../utils/storage";
import { camelize } from "../../../../utils/common";

interface ICheckbox {
  label: string;
  checked: boolean;
  setValue: SetterOrUpdater<boolean>;
}

const CheckBoxComponent: React.FC<ICheckbox> = ({
  label,
  checked,
  setValue,
}) => {
  return (
    <FormControlLabel
      onChange={(e) => {
        const event = e as React.ChangeEvent<HTMLInputElement>;
        const status = event.target.checked;
        setValue(status);

        const atribute = camelize(label);
        setStoredAttribute(atribute, `${status}`);
      }}
      control={
        <Checkbox
          checked={checked}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default CheckBoxComponent;
