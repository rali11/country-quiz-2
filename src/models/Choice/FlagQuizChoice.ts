import { Choice } from "./Choice"

export class FlagQuizChoice<T> extends Choice<T>{
  protected label: string
  protected value: T
  private urlFlag: string

  constructor(label: string, value: T, urlFlag: string){
    super()
    this.label = label
    this.value = value
    this.urlFlag = urlFlag
  }

  getUrlFlag(){
    return this.urlFlag
  }
}