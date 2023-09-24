import type { Quiz } from "./Quiz"
import type { Question } from "../Question"
import type { Choice } from "../Choice/Choice";

export class CountryFlagQuiz implements Quiz{
  private choices: Choice[]
  private correctChoice: Choice
  private urlImg: string

  constructor(choices:Choice[], correctChoice: Choice, urlImg: string){   
    this.choices = choices
    this.correctChoice = correctChoice
    this.urlImg = urlImg
  }

  getChoices(): Choice[] {
    return this.choices
  }  

  getQuestion(): Question {
    return {
      question: `Wich country does this flag belong to?`,
      urlImg: this.urlImg
    }
  }

  validateAnswer(answer: Choice): boolean {
    return this.correctChoice.isEqualTo(answer)
  }

  isEqualTo(quiz: Quiz): boolean {
    const { question } = this.getQuestion()
    const { question: question2 } = quiz.getQuestion() 
    return question === question2 && quiz.validateAnswer(this.correctChoice)
  };
}