import { AttributesProps } from "../contentScript/inject";

export class Attributes implements AttributesProps {
  noIcon: string;
  brandColor: string;
  darkMode: string;
  layoutVertical: string;
  font: string;
  size: string;
  backgroundColor: string;

  constructor(
    private attributes: {
      [x: string]: string;
    }[]
  ) {
    this.attributes = attributes;
    this.noIcon = "";
    this.brandColor = "";
    this.darkMode = "";
    this.layoutVertical = "";
    this.font = "";
    this.size = "";
    this.backgroundColor = "";
  }

  fill() {
    if (this.attributes) {
      this.attributes.forEach((atribute) => {
        const key = Object.keys(atribute)[0];
        const value = atribute[key];

        switch (key) {
          case "darkMode":
            if (value === "true") this[key] = "dark";
            break;
          case "layoutVertical":
            if (value === "true") this[key] = "vertical";
            break;
          case "noIcon":
            if (value === "true") this[key] = "false";
            break;
          case "size":
            this[key] = value;
            break;
          case "brandColor":
            const bC = value ? value.replace("#", "") : "";
            this[key] = bC;
            break;
          case "backgroundColor":
            const bgC = value ? value.replace("#", "") : "";
            this[key] = bgC;
            break;

          default:
            break;
        }
      });
    }
  }
}
