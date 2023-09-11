import { Choice } from '@/models/Choice/Choice'
import type { Question } from '../Question'

export abstract class Quiz {
  protected choices:Choice[]
  protected correctChoice:Choice

  constructor(choices:Choice[]){
    this.choices = choices
    this.correctChoice = choices[Math.floor(Math.random() * 4)]
  }

  abstract getQuestion(): Question

  getChoices(): Choice[]{
    return this.choices
  }

  validateChoice(selectedChoice:Choice){
    return this.correctChoice.isEqualTo(selectedChoice)
  }

  isEqualTo(quiz:Quiz){
    return quiz.validateChoice(this.correctChoice)
  }
}