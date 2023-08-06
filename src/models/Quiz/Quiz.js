import {Choice} from '@/models/Choice/Choice'

export class Quiz {
  choices
  correctChoice

  constructor(choices){
    choices.forEach(choice => {
      if(!(choice instanceof Choice)) throw new Error('Should be extended from Choice class')
    })
    this.choices = choices
    this.correctChoice = choices[0]
  }

  getQuestion(){
    return ''
  }

  getChoices(){
    return this.choices
  }

  validateChoice(selectedChoice){
    if (!(selectedChoice instanceof Choice)) throw new Error('Should be extended from Choice class')
    return this.correctChoice.isEqualTo(selectedChoice)
  }

  isEqualTo(quiz){
    if (!(quiz instanceof Quiz)) throw new Error('Should be extended from Quiz class') 
    return quiz.validateChoice(this.correctChoice)
  }
}