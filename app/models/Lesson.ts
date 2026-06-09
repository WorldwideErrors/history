export interface Lesson {
  id: string;
  title: string;
  xpPerQuestion: number;
  content: LessonContent[];
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  answers: string[];
  correctIndex: number;
  correction: string;
}

export interface LessonContent {
  id: string;
  type: "fact" | "image";
  content: string;
}