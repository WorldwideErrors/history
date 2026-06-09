import { ProgressRepository } from "../app/repositories/ProgressRepository";

const repository = new ProgressRepository();

export function useResetLessons() {
  const resetLessons = async () => {
    await repository.resetAllLessons();
    console.log("Lessons resetted.")
  };

  

  return { resetLessons };
}