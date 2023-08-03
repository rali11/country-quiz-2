import { Choice } from "./Choice"

export class FlagQuizChoice extends Choice{
  #country
  
  constructor(country){
    super()
    this.#country = country
  }

  getLabel(){
    return this.#country.getName()
  }

  getValue(){
    return this.#country.getUrlFlag()
  }
}