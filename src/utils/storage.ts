export interface LocalStorage {
  noIcon: string;
  darkMode: string;
  layoutVertical: string;
}

export type LocalStorageKeys = keyof LocalStorage;

export function setStoredAttribute(
  atribute: LocalStorageKeys,
  value: string
): Promise<void> {
  console.log("Salvei!");
  console.log(atribute);
  console.log(value);
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
  const keys: LocalStorageKeys[] = ["darkMode", "layoutVertical", "noIcon"];

  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      const result = keys.map((key) => {
        return { [key]: res[key] };
      });
      resolve(result);
    });
  });
}
