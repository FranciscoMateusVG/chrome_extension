import { TextField } from "@mui/material";
import * as React from "react";
import { SetterOrUpdater } from "recoil";
import { camelize } from "../../../../utils/common";
import { setStoredAttribute } from "../../../../utils/storage";

interface IInputComponent {
  label: string;
  value: string;
  setValue: SetterOrUpdater<string>;
}

const InputComponent: React.FC<IInputComponent> = ({
  label,
  value,
  setValue,
}) => {
  const handleChange = (event: any) => {
    const selected = event.target.value as string;
    setValue(selected);

    const atribute = camelize(label);
    console.log(atribute);
    setStoredAttribute(atribute, selected);
  };

  return (
    <TextField
      size="small"
      value={value ? value : ""}
      onChange={handleChange}
      id="outlined-basic"
      label={label}
      variant="outlined"
    />
  );
};

export default InputComponent;
