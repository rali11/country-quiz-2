import type { Quiz } from "./Quiz"
import type { Question } from "../Question"
import type { Choice } from "../Choice/Choice"

export class CountryFlagQuiz implements Quiz<string>{
  private choices: Choice<string>[]
  private correctChoice: Choice<string>
  private urlImg: string

  constructor(choices:Choice<string>[], correctChoice: Choice<string>, urlImg: string){   
    this.choices = choices
    this.correctChoice = correctChoice
    this.urlImg = urlImg
  }

  getChoices(): Choice<string>[] {
    return this.choices
  }  

  getQuestion(): Question {
    return {
      question: `Wich country does this flag belong to?`,
      urlImg: this.urlImg
    }
  }

  validateAnswer(answer: Choice<string>): boolean {
    return this.correctChoice.isEqualTo(answer)
  }

  isEqualTo(quiz: Quiz<string>): boolean {
    const { question } = this.getQuestion()
    const { question: question2 } = quiz.getQuestion() 
    return question === question2 && quiz.validateAnswer(this.correctChoice)
  };
}