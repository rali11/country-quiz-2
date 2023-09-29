import { useQuizStore } from "../quiz";

export function useAppStore() {
  return {
    quizStore: useQuizStore()
  }
}

export type RootStoreInterface = ReturnType<typeof useAppStore>