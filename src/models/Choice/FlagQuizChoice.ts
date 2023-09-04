import { Choice } from "./Choice"
import type { Country } from "../Country"

export class FlagQuizChoice extends Choice{
  country: Country
  
  constructor(country: Country){
    super()
    this.country = country
  }

  getLabel(){
    return this.country.name
  }
  
  getValue(){
    return this.country.urlFlag
  }
}