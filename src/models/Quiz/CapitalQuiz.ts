import { Quiz } from "./Quiz"
import { Choice } from '@/models/Choice/Choice'
import type { Question } from "../Question"

export class CapitalQuiz extends Quiz{

  constructor(choices:Choice[]){
    super(choices)
  }

  getQuestion(): Question {
    return {
      question: `${super.correctChoice.getLabel()} is the capital of`
    }
  }
}