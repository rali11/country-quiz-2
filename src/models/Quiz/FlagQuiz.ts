import { Quiz } from './Quiz'
import { Choice } from '@/models/Choice/Choice'
import type { Question } from '../Question'

export class FlagQuiz extends Quiz{

  constructor(choices:Choice[]){
    super(choices)
  }

  getQuestion(): Question{
    return {
      question: `Wich country does this flag belong to?`,
      urlImg: super.correctChoice.getValue()
    }
  }
}