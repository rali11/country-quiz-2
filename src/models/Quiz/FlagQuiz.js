import { Quiz } from "./Quiz"

export class FlagQuiz extends Quiz{
  #correctChoice

  constructor(choices){
    super(choices)
    this.#correctChoice = choices[0]
  }

  getQuestion(){
    return `<img src='${this.#correctChoice.getValue()}'>
    <br>
    Which country does this flag belong to?`
  }
}