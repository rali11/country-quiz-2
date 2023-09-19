import { FlagQuiz } from "@/models/Quiz/FlagQuiz"
import { FlagQuizChoice } from "@/models/Choice/FlagQuizChoice"
import { getRandomInt } from "@/shared/Utils"
import type { Country } from "@/models/Country"

export const getFlagQuiz = (countries: Country[]) => {
  const indexCountriesNotAvailable: number[] =  []
  const getChoice = () => {
    const indexCountry = getRandomInt(countries.length, indexCountriesNotAvailable)
    indexCountriesNotAvailable.push(indexCountry)
    return new FlagQuizChoice(countries[indexCountry].name, countries[indexCountry].name, countries[indexCountry].urlFlag)
  }
  return new FlagQuiz([getChoice(),getChoice(),getChoice(),getChoice()])
}
