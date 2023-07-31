export class FlagQuizChoice {
  #country
  
  constructor(country){
    this.#country = country
  }

  getLabel(){
    return this.#country.getName()
  }

  getValue(){
    return this.#country.getUrlFlag()
  }

  isEqualTo(choice){
    return choice.getValue() === this.getValue()
  }
}