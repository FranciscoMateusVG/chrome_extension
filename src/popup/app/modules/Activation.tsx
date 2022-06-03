import React, { useEffect, useState } from "react";
import { ToggleButton } from "../components/Toggle";
import { HexColorPicker } from "react-colorful";
import { useRecoilState } from "recoil";
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
  universalActiveValue,
} from "../../atoms";
import ColorizeIcon from "@mui/icons-material/Colorize";
import Card from "../components/Card";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import Select from "../components/Select";
import { Button } from "@mui/material";

const Activation: React.FC = () => {
  const [showColorOne, setShowColorOne] = useState(false);
  const [showColorTwo, setShowColorTwo] = useState(false);
  const [noIconValue, setNoIcon] = useRecoilState(noIcon);
  const [darkModeValue, setDarkMode] = useRecoilState(darkMode);
  const [layoutVericalValue, setLayoutVerical] = useRecoilState(layoutVerical);
  const [sizeValue, setSize] = useRecoilState(size);
  const [brandColorValue, setBrandColor] = useRecoilState(brandColor);
  const [bgColorValue, setBgColor] = useRecoilState(bgColor);
  const [activeValue, setActive] = useRecoilState(universalActiveValue);

  useEffect(() => {
    getStoredAttributes().then((result) => {
      console.log(result);
      if (result) {
        result.forEach((atribute) => {
          const key = Object.keys(atribute)[0];
          const value = atribute[key] === "true";
          switch (key) {
            case "active":
              console.log(value);
              setActive(value);
              break;
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
            case "backgroundColor":
              setBgColor(atribute[key]);
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
      {/* <ToggleButton /> */}
      <div style={{ marginBottom: "10px" }}>
        {!activeValue && (
          <Button
            variant="contained"
            onClick={() => {
              const status = true;
              setActive(status);
              setStoredAttribute("active", `${true}`);
              chrome.tabs.query(
                { active: true, currentWindow: true },
                function (tabs) {
                  chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                      message: "status",
                      status: true,
                    },
                    function (response) {}
                  );
                }
              );
            }}
          >
            Activate
          </Button>
        )}
        {activeValue && (
          <Button
            variant="outlined"
            onClick={() => {
              const status = false;
              setActive(status);
              setStoredAttribute("active", `${false}`);
              chrome.tabs.query(
                { active: true, currentWindow: true },
                function (tabs) {
                  chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                      message: "status",
                      status: false,
                    },
                    function (response) {}
                  );
                }
              );
            }}
          >
            Disable
          </Button>
        )}
      </div>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ flexDirection: "column", position: "relative" }}>
              <Input
                label="Brand Color"
                setValue={setBrandColor}
                value={brandColorValue}
              />
              <ColorizeIcon
                sx={{
                  position: "absolute",
                  top: "6px",
                  left: "200px",
                  "&:hover": {
                    cursor: "pointer",
                    color: "blue",
                  },
                }}
                onClick={(e) => {
                  setShowColorTwo(false);
                  setShowColorOne(!showColorOne);
                }}
              />
              {showColorOne && (
                <HexColorPicker
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "-6px",
                    right: "-6px",
                  }}
                  color={brandColorValue}
                  onChange={(newColor) => {
                    setBrandColor(newColor);
                    setStoredAttribute("brandColor", newColor);
                  }}
                />
              )}
            </div>
            <div style={{ flexDirection: "column", position: "relative" }}>
              <Input
                label="Background Color"
                setValue={setBgColor}
                value={bgColorValue}
              />
              <ColorizeIcon
                sx={{
                  position: "absolute",
                  top: "6px",
                  left: "200px",
                  "&:hover": {
                    cursor: "pointer",
                    color: "blue",
                  },
                }}
                onClick={(e) => {
                  setShowColorOne(false);
                  setShowColorTwo(!showColorTwo);
                }}
              />
              {showColorTwo && (
                <HexColorPicker
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "-56px",
                    right: "-6px",
                  }}
                  color={bgColorValue}
                  onChange={(newColor) => {
                    setBgColor(newColor);
                    setStoredAttribute("backgroundColor", newColor);
                  }}
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
