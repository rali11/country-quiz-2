export class Choice {

  getLabel(){
    return ''
  }

  getValue(){
    return ''
  }

  isEqualTo(choice){
    if (!(choice instanceof Choice)) throw new Error('Should be extended from Choice class')
    return choice.getValue() === this.getValue()
  }
}