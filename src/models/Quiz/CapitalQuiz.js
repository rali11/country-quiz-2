import { Quiz } from "./Quiz"

export class CapitalQuiz extends Quiz{
  correctChoice

  constructor(choices){
    super(choices)
    this.correctChoice = choices[Math.floor(Math.random() * 4)]
  }

  getQuestion(){
    return `${this.correctChoice.getValue()} is the capital of`
  }
}