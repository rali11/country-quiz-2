import { CountryFlagQuiz } from "@/models"
import { getRandomInt } from "@/shared/Utils"
import type { CountryInterface } from "@/models"
import { CountryChoice } from "@/models"

export const getCountryFlagQuiz = (countries: CountryInterface[]): CountryFlagQuiz => {
  const indexCountriesNotAvailable: number[] =  []

  const getChoice = () => {
    const indexCountry = getRandomInt(countries.length, indexCountriesNotAvailable)
    indexCountriesNotAvailable.push(indexCountry)
    return new CountryChoice(countries[indexCountry])
  }

  const choices = [getChoice(),getChoice(),getChoice(),getChoice()]
  const indexCorrectChoice = getRandomInt(indexCountriesNotAvailable.length)
  const { urlFlag } = countries[indexCountriesNotAvailable[indexCorrectChoice]]

  return new CountryFlagQuiz(choices, choices[indexCorrectChoice], urlFlag)
}
