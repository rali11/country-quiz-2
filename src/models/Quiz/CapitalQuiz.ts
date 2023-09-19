import { Quiz } from "./Quiz"
import type { Question } from "../Question"
import { getRandomInt } from "@/shared/Utils";
import type { CapitalQuizChoice } from "../Choice/CapitalQuizChoice";

export type CapitalQuizChoices<T> = [CapitalQuizChoice<T>,CapitalQuizChoice<T>,CapitalQuizChoice<T>,CapitalQuizChoice<T>]

export class CapitalQuiz<T extends string> extends Quiz<T>{
  protected choices: CapitalQuizChoices<T>
  protected correctChoice: CapitalQuizChoice<T>

  constructor(choices:CapitalQuizChoices<T>){   
    super()
    this.choices = choices
    this.correctChoice = choices[getRandomInt(4)]
  }

  getQuestion(): Question {
    return {
      question: `${this.correctChoice.getValue()} is the capital of`
    }
  }
}