import { CountryQuiz } from ".."
import type { QuestionInterface } from "@/models"
import { CountryChoice } from "@/models"

export class CountryFlagQuiz extends CountryQuiz{
  private urlImg: string
  protected choices: CountryChoice[]
  protected correctChoice: CountryChoice

  constructor(choices:CountryChoice[], correctChoice: CountryChoice, urlImg: string){   
    super()
    this.choices = choices
    this.correctChoice = correctChoice
    this.urlImg = urlImg
  }

  getQuestion(): QuestionInterface {
    return {
      question: `Wich country does this flag belong to?`,
      urlImg: this.urlImg
    }
  }
}