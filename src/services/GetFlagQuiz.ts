import { CountryFlagQuiz } from "@/models/Quiz/CountryFlagQuiz"
import { getRandomInt } from "@/shared/Utils"
import type { Country } from "@/models/Country"
import { Choice } from "@/models/Choice/Choice"

export const getFlagQuiz = (countries: Country[]) => {
  const indexCountriesNotAvailable: number[] =  []
  const getChoice = () => {
    const indexCountry = getRandomInt(countries.length, indexCountriesNotAvailable)
    indexCountriesNotAvailable.push(indexCountry)
    return new Choice(countries[indexCountry].name, countries[indexCountry].name)
  }

  const choices: Choice[] = [getChoice(),getChoice(),getChoice(),getChoice()]
  const indexCorrectChoice = getRandomInt(indexCountriesNotAvailable.length)
  const { urlFlag } = countries[indexCountriesNotAvailable[indexCorrectChoice]]

  return new CountryFlagQuiz(choices, choices[indexCorrectChoice], urlFlag)
}
