export class Player {
  #score

  constructor(score){
    this.#score = score
  }

  increaseScore(){
    return this.#score.increse()
  }

  getScore(){
    return this.#score.getScore()
  }

  resetScore(){
    this.#score.reset()
  }
}