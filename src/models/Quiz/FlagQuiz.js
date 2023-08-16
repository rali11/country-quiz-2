import { Quiz } from './Quiz'
import Question from '@/components/ui/atoms/Question/FlagQuizQuestion.vue'
import { h } from 'vue'

export class FlagQuiz extends Quiz{
  correctChoice

  constructor(choices){
    super(choices)
    this.correctChoice = choices[Math.floor(Math.random() * 4)]
  }

  getQuestion(){
    return () => h(Question, {question:'Which country does this flag belong to?'})
  }
}