import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import * as React from "react";

const CardComponent: React.FC<any> = ({ children }) => {
  return (
    <Card sx={{ minWidth: 275, background: "floralwhite" }}>
      <CardContent sx={{ padding: "5px", paddingBottom: "5px !important" }}>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
