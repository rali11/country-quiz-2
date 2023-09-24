import type { Choice } from '@/models/Choice/Choice'
import type { Question } from '../Question'

export interface Quiz<T> {
  getQuestion: () => Question
  getChoices: () => Choice<T>[]
  validateAnswer: (answer: Choice<T>) => boolean
  isEqualTo:(quiz:Quiz<T>) => boolean
}