import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { ICheckboxes } from "./interfaces";
import { useRecoilState } from "recoil";
import { FormControl, FormGroup, FormControlLabel } from "@mui/material";

const Checkboxes: React.FC<ICheckboxes> = ({ state }) => {
  const [checkboxes, setCheckboxes] = useRecoilState(state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.ariaLabel;
    const checked = event.target.checked;
    const newValue = { name: selected, checked: checked };
    const index = checkboxes.findIndex((x) => x.name === selected);

    const newList = replaceItemAtIndex(checkboxes, index, newValue);

    setCheckboxes(newList);
  };

  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormGroup>
        {checkboxes.map((checkbox, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkbox.checked}
                onChange={handleChange}
                inputProps={{ "aria-label": checkbox.name }}
              />
            }
            label={checkbox.name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default Checkboxes;
