import { ProgressRepository } from "../app/repositories/ProgressRepository";

const progressRepository = new ProgressRepository();

export function useQuizViewModel() {
  const completeLesson = async (
    lessonId: string,
    score: number,
    questionCount: number
  ) => {
    await progressRepository.markLessonCompleted(
      lessonId,
      score,
      questionCount
    );
  };

  return {
    completeLesson,
  };
}