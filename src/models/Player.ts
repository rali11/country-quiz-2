import { Score } from "./Score"

export class Player {
  score: Score

  constructor(score: Score){
    this.score = score
  }

  increaseScore(){
    return this.score.increase()
  }

  getScore(){
    return this.score.getScore()
  }

  resetScore(){
    this.score.reset()
  }
}