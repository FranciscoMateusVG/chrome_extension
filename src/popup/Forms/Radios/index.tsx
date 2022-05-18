import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { useRecoilState } from "recoil";
import { IRadios } from "./interfaces";
import { MyFormControlLabel } from "./MyFormControlLabel";

export const Radios: React.FC<IRadios> = ({ name, options, state }) => {
  const [value, set] = useRecoilState(state);
  const handleChange = (event: any) => {
    set(event.target.value);
  };

  const sx = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <RadioGroup
      sx={sx}
      name={name}
      defaultValue={value}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <MyFormControlLabel
          key={index}
          value={option}
          control={<Radio />}
          label={option.charAt(0).toUpperCase() + option.slice(1)}
        />
      ))}
    </RadioGroup>
  );
};
