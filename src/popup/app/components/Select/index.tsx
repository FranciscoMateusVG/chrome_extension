import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SetterOrUpdater } from "recoil";
import { FormControl } from "@mui/material";
import { camelize } from "../../../../utils/common";
import { setStoredAttribute } from "../../../../utils/storage";

interface ISelect {
  label: string;
  values: string[];
  value: string;
  setValue: SetterOrUpdater<string>;
}

const SelectComponent: React.FC<ISelect> = ({
  label,
  values,
  value,
  setValue,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const selected = event.target.value as string;
    setValue(selected);

    const atribute = camelize(label);
    setStoredAttribute(atribute, selected);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {values.map((value: string, index: number) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
