import { Marker } from "../models/Marker";

export const markers: Marker[] = [
  {
    id: 1,
    name: "Grote Kerk Breda",
    position: {
      lat: 51.588,
      lng: 4.775,
    },
    description: "Historische kerk in het centrum van Breda.",
    lessonIds: ["lesson-1", "lesson-2"],
  },
  {
    id: 2,
    name: "Thuis",
    position: {
      lat: 51.585589,
      lng: 4.818478,
    },
    description: "Dit is thuis.",
    lessonIds: ["lesson-1"],
  },
];

