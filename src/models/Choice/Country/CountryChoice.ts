import type { ChoiceInterface } from "..";
import type { CountryInterface } from "../..";

export class CountryChoice implements ChoiceInterface{
  private country: CountryInterface

  constructor(country: CountryInterface){
    this.country = country
  }

  getLabel(): string{
    return this.country.name
  }

  getValue(): string | number {
    return this.country.capitalName
  }

  isEqualTo(choice: ChoiceInterface): boolean {
    return this.getValue() === choice.getValue() && this.getLabel() === choice.getLabel()
  }
}