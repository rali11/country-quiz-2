import type { Quiz } from "./Quiz"
import type { Question } from "../Question"
import type { Choice } from "../Choice/Choice";

export class CountryCapitalQuiz implements Quiz{
  private choices: Choice[]
  private correctChoice: Choice

  constructor(choices:Choice[], correctChoice: Choice){   
    this.choices = choices
    this.correctChoice = correctChoice
  }

  getChoices(): Choice[] {
    return this.choices
  }  

  getQuestion(): Question {
    return {
      question: `${this.correctChoice.getValue()} is the capital of`
    }
  }

  validateAnswer(answer: Choice): boolean {
    return this.correctChoice.isEqualTo(answer)
  }

  isEqualTo(quiz: Quiz): boolean {
    const { question: question2 } = quiz.getQuestion() 
    const { question } = this.getQuestion()
    return question === question2 && quiz.validateAnswer(this.correctChoice)
  };
}