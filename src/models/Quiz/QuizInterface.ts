import type { ChoiceInterface } from '@/models/Choice/ChoiceInterface'
import type { QuestionInterface } from '../Question/QuestionInterface'

export interface QuizInterface{
  getQuestion: () => QuestionInterface
  getChoices: () => ChoiceInterface[]
  validateAnswer: (answer: ChoiceInterface) => boolean
  isEqualTo: (quiz: QuizInterface) => boolean
}