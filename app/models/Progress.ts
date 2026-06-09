export type LocationProgress = {
  locationId: number;
  lessonProgress: LessonProgress[];
};

export type LessonProgress = {
  lessonId: string;
  currentQuestionIndex: number;
  score: number;
  completed: boolean;
};