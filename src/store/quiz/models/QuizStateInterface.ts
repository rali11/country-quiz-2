import type { CountryInterface, QuizInterface } from "@/models";

export interface QuizStateInterface {
  countries: CountryInterface[]
  quiz: QuizInterface | null
  listCompletedQuiz: QuizInterface[]
  loading: boolean
}