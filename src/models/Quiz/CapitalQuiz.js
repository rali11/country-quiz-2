import { Quiz } from "./Quiz"
import Question from '@/components/ui/atoms/Question/CapitalQuizQuestion.vue'
import { h } from 'vue'

export class CapitalQuiz extends Quiz{
  correctChoice

  constructor(choices){
    super(choices)
    this.correctChoice = choices[Math.floor(Math.random() * 4)]
  }

  getQuestion(){
    return () => h(Question, {question:`${this.correctChoice.getValue()} is the capital of`})
  }
}