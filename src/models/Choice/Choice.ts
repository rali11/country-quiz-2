import type { Country } from "../Country"

export abstract class Choice {
  protected country: Country

  constructor(country: Country){
    this.country = country
  }

  abstract getLabel(): string

  abstract getValue(): string

  isEqualTo(choice:Choice){
    return choice.getValue() === this.getValue()
  }
}