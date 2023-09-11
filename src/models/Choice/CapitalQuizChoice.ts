import { Choice } from "./Choice"
import type { Country } from "../Country"

export class CapitalQuizChoice extends Choice{
  
  constructor(country: Country){
    super(country)
  }

  getLabel(): string{
    return this.country.name
  }

  getValue(): string{
    return this.country.capitalName
  }
}