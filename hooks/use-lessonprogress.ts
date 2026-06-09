import { useEffect, useState } from "react";
import { ProgressRepository } from "../app/repositories/ProgressRepository";

const progressRepository = new ProgressRepository();

export function useLessonProgress(lessonId: string) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const load = async () => {
      const progress =
        await progressRepository.getLessonProgress(lessonId);

      setCompleted(progress?.completed ?? false);
    };

    load();
  }, [lessonId]);

  return { completed };
}