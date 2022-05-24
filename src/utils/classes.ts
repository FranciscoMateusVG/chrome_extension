import { AttributesProps } from "../contentScript/inject";

export class Attributes implements AttributesProps {
  noIcon: string;
  brandColor: string;
  key: string;
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
    this.key = "INSERT_KEY_HERE";
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
        console.log(key, value);
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

          default:
            break;
        }
      });
    }
  }
}
