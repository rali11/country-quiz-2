import type { CountryInterface, QuizInterface } from "@/models";
import { getRandomInt } from "@/shared/Utils";
import { getCountryCapitalQuiz } from "./Country/GetCountryCapitalQuiz";
import { getCountryFlagQuiz } from "./Country/GetCountryFlagQuiz";

const getQuiz = (countries: CountryInterface[]): QuizInterface => {
  return getRandomInt(2) ? getCountryCapitalQuiz(countries) : getCountryFlagQuiz(countries)
}

export { getQuiz }