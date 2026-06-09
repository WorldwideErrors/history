import AsyncStorage from "@react-native-async-storage/async-storage";
import { LessonProgress } from "../models/Progress";

export class ProgressRepository {
  async markLessonCompleted(
    lessonId: string,
    score: number,
    questionCount: number
  ) {
    await AsyncStorage.setItem(
      `lesson-progress-${lessonId}`,
      JSON.stringify({
        lessonId,
        score,
        currentQuestionIndex: questionCount,
        completed: true,
      })
    );
  }

  async getLessonProgress(
    lessonId: string
  ): Promise<LessonProgress | null> {
    const value = await AsyncStorage.getItem(
      `lesson-progress-${lessonId}`
    );

    return value ? JSON.parse(value) : null;
  }

  async resetAllLessons() {
    const keys = await AsyncStorage.getAllKeys();

    const lessonKeys = keys.filter((key) =>
      key.startsWith("lesson-progress-")
    );

    await AsyncStorage.multiRemove(lessonKeys);
  }
}