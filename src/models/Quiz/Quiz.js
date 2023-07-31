export class Quiz {
  #choices
  #correctChoice

  constructor(choices){
    this.#choices = choices
    this.#correctChoice = choices[0]
  }

  getQuestion(){
    return ''
  }

  getChoices(){
    return this.#choices
  }

  validateChoice(selectedChoice){
    return this.#correctChoice.isEqualTo(selectedChoice)
  }
}