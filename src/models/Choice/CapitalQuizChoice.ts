import { Choice } from "./Choice"

export class CapitalQuizChoice<T> extends Choice<T>{
  protected label: string
  protected value: T

  constructor(label: string, value: T){
    super()
    this.label = label
    this.value = value
  }
}