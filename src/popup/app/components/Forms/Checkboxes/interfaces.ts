import { RecoilState } from "recoil";

export type Checkboxes = {
  name: string;
  checked: boolean;
  sideAtribute?: "select" | "input";
  sideAtributeValue?: string;
}[];

export interface ICheckboxes {
  state: RecoilState<Checkboxes>;
}
