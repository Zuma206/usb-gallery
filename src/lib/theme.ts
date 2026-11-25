import defaultFloor from "../theme/floor.jpg?url";
import defaultWall from "../theme/wall.jpg?url";

type Theme = {
  floor: string;
  wall: string;
};

export async function getTheme(): Promise<Theme> {
  return {
    floor: defaultFloor,
    wall: defaultWall,
  };
}
