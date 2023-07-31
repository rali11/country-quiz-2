export class CapitalQuizChoice {
  #country
  
  constructor(country){
    this.#country = country
  }

  getLabel(){
    return this.#country.getName()
  }

  getValue(){
    return this.#country.getCapitalName()
  }

  isEqualTo(choice){
    return choice.getValue() === this.getValue()
  }
}