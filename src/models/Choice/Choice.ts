export abstract class Choice {

  abstract getLabel(): string

  abstract getValue(): string

  isEqualTo(choice:Choice){
    return choice.getValue() === this.getValue()
  }
}