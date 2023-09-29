import type { CountryInterface, QuizInterface } from "@/models";

export interface QuizStateInterface {
  countries: CountryInterface[]
  loading: boolean
  quiz: QuizInterface | null
  listCompletedQuiz: QuizInterface[]
}