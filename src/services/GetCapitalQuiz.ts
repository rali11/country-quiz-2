import { CountryCapitalQuiz} from "@/models/Quiz/CountryCapitalQuiz"
import { getRandomInt } from "@/shared/Utils"
import type { Country } from "@/models/Country"
import { Choice } from "@/models/Choice/Choice"

export const getCapitalQuiz = (countries: Country[]) => {
  const indexCountriesNotAvailable: number[] =  []
  const getChoice = () => {
    const indexCountry = getRandomInt(countries.length, indexCountriesNotAvailable)
    indexCountriesNotAvailable.push(indexCountry)
    return new Choice(countries[indexCountry].name, countries[indexCountry].capitalName)
  }
  
  const choices = [getChoice(),getChoice(),getChoice(),getChoice()]
  const indexCorrectChoice = getRandomInt(indexCountriesNotAvailable.length)
  
  return new CountryCapitalQuiz(choices, choices[indexCorrectChoice])
}