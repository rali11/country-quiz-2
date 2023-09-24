export class Choice{
  private label: string
  private value: string

  constructor(label: string, value: string){
    this.label = label
    this.value = value
  }
  
  getLabel(): string {
    return this.label
  }

  getValue(): string {
    return this.value
  }

  isEqualTo(choice: Choice): boolean{
    return choice.getValue() === this.value
  }
}