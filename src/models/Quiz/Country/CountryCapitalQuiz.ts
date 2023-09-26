import { CountryQuiz } from "./CountryQuiz";
import type { QuestionInterface } from "../..";
import type { CountryChoice } from "../..";

export class CountryCapitalQuiz extends CountryQuiz{
  protected choices: CountryChoice[]
  protected correctChoice: CountryChoice

  constructor(choices:CountryChoice[], correctChoice: CountryChoice){   
    super()
    this.choices = choices
    this.correctChoice = correctChoice
  }

  getQuestion(): QuestionInterface {
    return {
      question: `${this.correctChoice.getValue()} is the capital of`
    }
  }

}