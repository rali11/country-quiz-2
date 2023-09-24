import { ref } from 'vue'
import { getRandomInt } from '@/shared/Utils'
import { getCapitalQuiz } from '@/services/GetCapitalQuiz'
import { getFlagQuiz } from '@/services/GetFlagQuiz'
import { apiClient } from '@/api-client'

const countries = await apiClient.country.fetchCountries() 

export function useQuiz() {
  const newQuiz = getRandomInt(2) ? getCapitalQuiz(countries) : getFlagQuiz(countries)
  const quiz = ref(newQuiz) 
  const listCompletedQuiz = ref<typeof newQuiz[]>([])
  listCompletedQuiz.value.push(newQuiz)
  
  const getQuiz = () => {
    const newQuiz = getRandomInt(2) ? getCapitalQuiz(countries) : getFlagQuiz(countries)
    if (listCompletedQuiz.value.length && listCompletedQuiz.value.every(quiz => newQuiz.isEqualTo(quiz))) {
      getQuiz()
    }
    quiz.value = newQuiz
    listCompletedQuiz.value.push(newQuiz)
  }

  return {
    quiz,
    getQuiz,
    listCompletedQuiz
  }
}