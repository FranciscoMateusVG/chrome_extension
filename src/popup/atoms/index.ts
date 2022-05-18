import { atom } from "recoil";
import { Checkboxes } from "../Forms/Checkboxes/interfaces";

export const universalType = atom({
  key: "UNIVERSAL_TYPE", // unique ID (with respect to other atoms/selectors)
  default: "embedded", // default value (aka initial value)
});

export const universalAttributes = atom<Checkboxes>({
  key: "UNIVERSAL_ATTRIBUTES", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      name: "No Icon",
      checked: false,
    },
  ],
});

export const universalActive = atom({
  key: "UNIVERSAL_ACTIVE", // unique ID (with respect to other atoms/selectors)
  default: "active", // default value (aka initial value)
});
