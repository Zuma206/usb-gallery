import defaultFloor from "../theme/floor.jpg?url";
import defaultWall from "../theme/wall.jpg?url";
import { resolve } from "node:path";

export type Config = {
  title: string;
  theme: {
    floor: string;
    wall: string;
  };
};

let cachedConfig: Config | null = null;
const configImport = import.meta.glob("/src/config/*.txt", {
  import: "default",
  query: "?raw",
  eager: true,
});

function getConfigKey(key: string, value: string): string {
  return configImport[resolve("/src/config/", key + ".txt")] ?? value;
}

export function getConfig(): Config {
  if (cachedConfig !== null) return cachedConfig;
  return (cachedConfig = {
    title: getConfigKey("title", "USB Gadget"),
    theme: { wall: defaultWall, floor: defaultFloor },
  });
}
