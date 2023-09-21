import { ref } from 'vue'
import { getRandomInt } from '@/shared/Utils'
import { getCapitalQuiz } from '@/services/GetCapitalQuiz'
import { getFlagQuiz } from '@/services/GetFlagQuiz'
import { apiClient } from '@/api-client'

const countries = await apiClient.country.fetchCountries() 

export function useQuiz() {
  let newQuiz = getRandomInt(2) ? getCapitalQuiz(countries) : getFlagQuiz(countries)
  const quiz = ref(newQuiz) 
  const completedQuizzes: typeof newQuiz[] = []
  completedQuizzes.push(newQuiz)
  
  const getQuiz = () => {
    newQuiz = getRandomInt(2) ? getCapitalQuiz(countries) : getFlagQuiz(countries)
    if (completedQuizzes.length && completedQuizzes.every(quiz => newQuiz.isEqualTo(quiz))) {
      getQuiz()
    }
    quiz.value = newQuiz
    completedQuizzes.push(newQuiz)
  }

  return {
    quiz,
    getQuiz,
  }
}