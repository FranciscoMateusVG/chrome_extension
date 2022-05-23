import { RecoilState } from "recoil";
import { Checkboxes } from "./Checkboxes/interfaces";

export interface IForms {
  header: string;
  state: RecoilState<string | Checkboxes>;
  type:
    | {
        id: "radio";
        options: string[];
      }
    | {
        id: "checkbox";
      };
}
