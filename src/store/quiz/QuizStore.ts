import { reactive } from "vue";
import type { QuizStateInterface } from "./models";
import { apiClient } from "@/api-client";
import { getQuiz } from "@/services/models/Quiz";

const quizState = reactive<QuizStateInterface>({
  loading:false,
  countries:[],
  quiz:null,
  listCompletedQuiz:[]
})

const actions = {
  async loadQuiz(){
    quizState.loading = true
    quizState.listCompletedQuiz = []
    quizState.countries = []
    quizState.countries = await apiClient.country.fetchCountries()
    quizState.loading = false
    this.nextQuiz()
  },
  async nextQuiz () {
    quizState.quiz = getQuiz(quizState.countries)
    if(quizState.listCompletedQuiz.length && quizState.listCompletedQuiz.some(quiz => quizState.quiz?.isEqualTo(quiz))){
      this.nextQuiz()
    }
    quizState.listCompletedQuiz.push(quizState.quiz)
  },
  async reset(){
    await this.loadQuiz()
  }
}

const getters = {
  get quiz(){
    return quizState.quiz
  },
  get loading(){
    return quizState.loading
  },
  get lenghtCompletedQuiz(){
    return quizState.listCompletedQuiz.length
  }
}

export interface QuizStoreInterface {
  getters: typeof getters
  actions: typeof actions
}

export function useQuizStore(): QuizStoreInterface {
  return {
    getters,
    actions
  }
}