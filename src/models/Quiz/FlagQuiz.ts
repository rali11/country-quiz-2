import { Quiz } from './Quiz'
import type { Question } from '../Question'
import { getRandomInt } from '@/shared/Utils';
import type { FlagQuizChoice } from '../Choice/FlagQuizChoice';

export type FlagQuizChoices<T> = [FlagQuizChoice<T>,FlagQuizChoice<T>,FlagQuizChoice<T>,FlagQuizChoice<T>]

export class FlagQuiz<T extends string> extends Quiz<T>{
  protected choices: FlagQuizChoices<T>
  protected correctChoice: FlagQuizChoice<T>

  constructor(choices:FlagQuizChoices<T>){
    super()
    this.choices = choices
    this.correctChoice = choices[getRandomInt(4)]
  }

  getQuestion(): Question {
    return {
      question: `Wich country does this flag belong to?`,
      urlImg: this.correctChoice.getUrlFlag()
    }
  }
}