import { LocationProgress } from "../models/Progress";

export const userProgress: LocationProgress = {
  locationId: 1,
  lessonProgress: [
    {
      lessonId: "lesson-1",
      currentQuestionIndex: 2,
      score: 20,
      completed: false,
    },
    {
      lessonId: "lesson-2",
      currentQuestionIndex: 0,
      score: 0,
      completed: false,
    },
  ],
};