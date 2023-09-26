import type { CountryInterface, QuizInterface } from "@/models";
import { getRandomInt } from "@/shared/Utils";
import { getCountryCapitalQuiz } from "./Country/GetCountryCapitalQuiz";
import { getCountryFlagQuiz } from "./Country/GetCountryFlagQuiz";
import { apiClient } from "@/api-client";

const countries: CountryInterface[] = await apiClient.country.fetchCountries() 

const getQuiz = (): QuizInterface => {
  return getRandomInt(2) ? getCountryCapitalQuiz(countries) : getCountryFlagQuiz(countries)
}

export { getQuiz }