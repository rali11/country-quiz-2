import { shallowRef, h, ref } from 'vue'
import { CapitalQuiz } from '@/models/Quiz/CapitalQuiz'
import { getCountries } from '@/services/RestCountries'
import { CapitalQuizChoice } from '@/models/Choice/CapitalQuizChoice'

export const useQuiz = () => {
  const quiz = ref({})
  const choices = ref([])
  const Question = shallowRef(() => h('div'))
  const notAvailableQuiz = ref([])

  const getRandomInt = (max, notAvailableNumbers = []) => {
    let number = Math.floor(Math.random() * max);
    while (notAvailableNumbers.find(item => item === number)) {
      number = Math.floor(Math.random() * max);
    }
    return number;
  }

  const getRandomQuiz = async () => {
    const countries = await getCountries()
    choices.value = []
    const indexNotAvailable = []
    for (let i = 0; i < 4; i++) {
      let index = getRandomInt(countries.length,indexNotAvailable)
      indexNotAvailable.push(index)
      choices.value.push(new CapitalQuizChoice(countries[index]))
    }
    const newQuiz = new CapitalQuiz(choices.value)
    if (notAvailableQuiz.value.length && notAvailableQuiz.value.every(quiz => newQuiz.isEqualTo(quiz))) {
      console.log('hola')
      getRandomQuiz()
    }
    return newQuiz
  }

  const getQuiz = async () => {
    //choices.value = countries.slice(0,4).map(country => new CapitalQuizChoice(country))
    quiz.value = await getRandomQuiz()
    notAvailableQuiz.value.push(quiz.value)
    Question.value = quiz.value.getQuestion()
  }



  return {
    quiz,
    choices,
    Question,
    getQuiz,
    notAvailableQuiz
  }
}