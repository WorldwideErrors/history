import { markers } from "../data/markers";

export const mapService = {
  getMarkers: async () => {
    return markers;
  },
};