import { ref } from 'vue'
import { getQuiz } from '@/services/models/Quiz'
import type { QuizInterface } from '@/models'

export function useQuiz() {
  const quiz = ref<QuizInterface>(getQuiz()) 
  const listCompletedQuiz = ref<QuizInterface[]>([])
  listCompletedQuiz.value.push(quiz.value)
  
  const nextQuiz = () => {
    quiz.value = getQuiz()
    if(listCompletedQuiz.value.some(quizCompleted => quiz.value.isEqualTo(quizCompleted))){
      nextQuiz()
    }
    listCompletedQuiz.value.push(quiz.value)
  }

  return {
    quiz,
    nextQuiz,
    listCompletedQuiz
  }
}