export interface LocalStorage {
  noIcon: string;
  darkMode: string;
  layoutVertical: string;
  size: string;
  brandColor: string;
  backgroundColor: string;
}

export type LocalStorageKeys = keyof LocalStorage;

export function setStoredAttribute(
  atribute: LocalStorageKeys,
  value: string
): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.set({ [atribute]: value }, () => {
      resolve();
    });
  });
}

export function getStoredAttributes(): Promise<
  {
    [x: string]: string;
  }[]
> {
  const keys: LocalStorageKeys[] = [
    "darkMode",
    "layoutVertical",
    "noIcon",
    "size",
    "brandColor",
    "backgroundColor",
  ];

  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      const result = keys.map((key) => {
        return { [key]: res[key] };
      });
      resolve(result);
    });
  });
}
