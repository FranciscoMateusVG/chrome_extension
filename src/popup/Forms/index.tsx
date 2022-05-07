import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Radios } from "./Radios";
import { IForms } from "./interfaces";
import { RecoilState } from "recoil";
import CheckboxesGroup from "./Checkboxes";
import { Checkboxes } from "./Checkboxes/interfaces";

export const Forms: React.FC<IForms> = ({ header, type, state }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {header}
        </Typography>
        {type.id === "radio" && (
          <Radios
            name=""
            options={type.options}
            state={state as RecoilState<string>}
          />
        )}
        {type.id === "checkbox" && (
          <CheckboxesGroup state={state as RecoilState<Checkboxes>} />
        )}
      </CardContent>
    </Card>
  );
};
