import { CountryChoice } from "@/models";
import type { ChoiceInterface, QuestionInterface, QuizInterface } from "@/models";

export abstract class CountryQuiz implements QuizInterface {
  protected abstract choices: CountryChoice[]
  protected abstract correctChoice: CountryChoice

  getChoices(): CountryChoice[] {
    return this.choices
  }
  
  abstract getQuestion(): QuestionInterface

  validateAnswer(answer: ChoiceInterface): boolean {
    return this.correctChoice.isEqualTo(answer)
  }

  isEqualTo(quiz: QuizInterface): boolean {
    const { question } = this.getQuestion()
    const { question: question2 } = quiz.getQuestion() 
    return question === question2 && quiz.validateAnswer(this.correctChoice)
  };
}