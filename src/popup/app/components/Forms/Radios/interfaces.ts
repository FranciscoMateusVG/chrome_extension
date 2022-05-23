import { FormControlLabelProps } from "@mui/material/FormControlLabel";
import { RecoilState } from "recoil";

export interface IRadios {
  state: RecoilState<string>;
  name: string;
  options: string[];
}
export interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}
