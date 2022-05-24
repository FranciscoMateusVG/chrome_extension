import React, { useEffect, useState } from "react";
import { ToggleButton } from "../components/Toggle";
import { HexColorPicker } from "react-colorful";
import { useRecoilState } from "recoil";
import { camelize } from "../../../utils/common";
import {
  getStoredAttributes,
  setStoredAttribute,
} from "../../../utils/storage";
import {
  brandColor,
  darkMode,
  layoutVerical,
  noIcon,
  size,
  bgColor,
} from "../../atoms";
import Card from "../components/Card";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import Select from "../components/Select";

const Activation: React.FC = () => {
  const [showColorOne, setShowColorOne] = useState(false);
  const [showColorTwo, setShowColorTwo] = useState(false);
  const [noIconValue, setNoIcon] = useRecoilState(noIcon);
  const [darkModeValue, setDarkMode] = useRecoilState(darkMode);
  const [layoutVericalValue, setLayoutVerical] = useRecoilState(layoutVerical);
  const [sizeValue, setSize] = useRecoilState(size);
  const [brandColorValue, setBrandColor] = useRecoilState(brandColor);
  const [bgColorValue, setBgColor] = useRecoilState(bgColor);

  useEffect(() => {
    getStoredAttributes().then((result) => {
      if (result) {
        result.forEach((atribute) => {
          const key = Object.keys(atribute)[0];
          const value = atribute[key] === "true";
          switch (key) {
            case "darkMode":
              setDarkMode(value);
              break;
            case "layoutVertical":
              setLayoutVerical(value);
              break;
            case "noIcon":
              setNoIcon(value);
              break;
            case "size":
              setSize(atribute[key]);
              break;
            case "brandColor":
              setBrandColor(atribute[key]);
              break;
            default:
              break;
          }
        });
      }
    });
  }, []);

  return (
    <>
      <ToggleButton />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CheckBox
              label="No Icon"
              checked={noIconValue}
              setValue={setNoIcon}
            />
            <CheckBox
              label="Dark Mode"
              checked={darkModeValue}
              setValue={setDarkMode}
            />
            <CheckBox
              label="Layout Vertical"
              checked={layoutVericalValue}
              setValue={setLayoutVerical}
            />
          </div>
        </Card>
        <Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Select
              label="Size"
              values={["large", "medium", "small"]}
              value={sizeValue}
              setValue={setSize}
            />
          </div>
        </Card>
        <Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flexDirection: "column" }}>
              <Input
                onClick={(e) => {
                  setShowColorOne(!showColorOne);
                }}
                onBlur={() => {
                  const atribute = camelize("Brand Color");
                  setStoredAttribute(atribute, brandColorValue);
                }}
                label="Brand Color"
                setValue={setBrandColor}
                value={brandColorValue}
              />
              {showColorOne && (
                <HexColorPicker
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "230px",
                    right: "46px",
                  }}
                  color={brandColorValue}
                  onChange={setBrandColor}
                />
              )}
            </div>
            <div style={{ flexDirection: "column" }}>
              <Input
                onClick={(e) => {
                  setShowColorTwo(!showColorTwo);
                }}
                onBlur={() => {
                  const atribute = camelize("Background Color");
                  setStoredAttribute(atribute, bgColorValue);
                }}
                label="Background Color"
                setValue={setBgColor}
                value={bgColorValue}
              />
              {showColorTwo && (
                <HexColorPicker
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "230px",
                    right: "46px",
                  }}
                  color={bgColorValue}
                  onChange={setBgColor}
                />
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Activation;
