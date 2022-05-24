import { atom } from "recoil";

// General
export const universalActive = atom({
  key: "UNIVERSAL_ACTIVE",
  default: "active",
});

export const universalTabsValue = atom({
  key: "UNIVERSAL_TABS-VALUE",
  default: 0,
});

export const universalActiveValue = atom({
  key: "UNIVERSAL_ACTIVE-VALUE",
  default: false,
});

// Attributes
export const noIcon = atom({
  key: "NO_ICON",
  default: false,
});

export const darkMode = atom({
  key: "DARK_MODE",
  default: false,
});

export const layoutVerical = atom({
  key: "LAYOUT-VERTICAL",
  default: false,
});

export const size = atom({
  key: "SIZE",
  default: "large",
});

export const brandColor = atom({
  key: "BRAND_COLOR",
  default: "",
});

export const bgColor = atom({
  key: "BACKGROUND_COLOR",
  default: "",
});
