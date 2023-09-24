import type { Quiz } from "./Quiz"
import type { Question } from "../Question"
import type { Choice } from "../Choice/Choice";

export class CountryCapitalQuiz implements Quiz<string>{
  private choices: Choice<string>[]
  private correctChoice: Choice<string>

  constructor(choices:Choice<string>[], correctChoice: Choice<string>){   
    this.choices = choices
    this.correctChoice = correctChoice
  }

  getChoices(): Choice<string>[] {
    return this.choices
  }  

  getQuestion(): Question {
    return {
      question: `${this.correctChoice.getValue()} is the capital of`
    }
  }

  validateAnswer(answer: Choice<string>): boolean {
    return this.correctChoice.isEqualTo(answer)
  }

  isEqualTo(quiz: Quiz<string>): boolean {
    const { question: question2 } = quiz.getQuestion() 
    const { question } = this.getQuestion()
    return question === question2 && quiz.validateAnswer(this.correctChoice)
  };
}