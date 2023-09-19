import { CapitalQuiz } from "@/models/Quiz/CapitalQuiz"
import { CapitalQuizChoice } from "@/models/Choice/CapitalQuizChoice"
import { getRandomInt } from "@/shared/Utils"
import type { Country } from "@/models/Country"

export const getCapitalQuiz = (countries: Country[]) => {
  const indexCountriesNotAvailable: number[] =  []
  const getChoice = () => {
    const indexCountry = getRandomInt(countries.length, indexCountriesNotAvailable)
    indexCountriesNotAvailable.push(indexCountry)
    return new CapitalQuizChoice(countries[indexCountry].name, countries[indexCountry].capitalName)
  }
  return new CapitalQuiz([getChoice(),getChoice(),getChoice(),getChoice()])
}