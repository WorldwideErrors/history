export type Marker = {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  description?: string;
  lessonIds: string[];
};

