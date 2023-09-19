import { Choice } from '@/models/Choice/Choice'
import type { Question } from '../Question'

export type Choices<T> = [Choice<T>, Choice<T>, Choice<T>, Choice<T>]

export abstract class Quiz<T> {
  protected abstract choices: Choices<T>
  protected abstract correctChoice: Choice<T>

  abstract getQuestion(): Question

  getChoices(){
    return this.choices
  }

  validateChoice(selectedChoice: Choice<T>){
    return this.correctChoice.isEqualTo(selectedChoice)
  }

  isEqualTo(quiz: Quiz<T>){
    return quiz.validateChoice(this.correctChoice)
  }
}