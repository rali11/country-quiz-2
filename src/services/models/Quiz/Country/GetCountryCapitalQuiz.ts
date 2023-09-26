import { CountryCapitalQuiz } from "@/models"
import { getRandomInt } from "@/shared/Utils"
import type { CountryInterface } from "@/models"
import { CountryChoice } from "@/models"

export const getCountryCapitalQuiz = (countries: CountryInterface[]): CountryCapitalQuiz => {
  const indexCountriesNotAvailable: number[] =  []

  const getChoice = () => {
    const indexCountry = getRandomInt(countries.length, indexCountriesNotAvailable)
    indexCountriesNotAvailable.push(indexCountry)
    return new CountryChoice(countries[indexCountry])
  }
  
  const choices = [getChoice(),getChoice(),getChoice(),getChoice()]
  const indexCorrectChoice = getRandomInt(indexCountriesNotAvailable.length)
  
  return new CountryCapitalQuiz(choices, choices[indexCorrectChoice])
}