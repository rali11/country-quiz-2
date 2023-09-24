import type { Choice } from '@/models/Choice/Choice'
import type { Question } from '../Question'

export interface Quiz {
  getQuestion: () => Question
  getChoices: () => Choice[]
  validateAnswer: (choice: Choice) => boolean
  isEqualTo:(quiz:Quiz) => boolean
}