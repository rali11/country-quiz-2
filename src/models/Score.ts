export class Score {
  private score: number

  constructor(){
    this.score = 0
  }

  increase(){
    this.score += 1 
  }

  reset(){
    this.score = 0
  }

  getScore(){
    return this.score
  }
}