export class Choice<T> {
  private label: string
  private value: T

  constructor(label: string, value: T){
    this.label = label
    this.value = value
  }

  getLabel(): string{
    return this.label
  }

  getValue(): T {
    return this.value
  }

  isEqualTo(choice: Choice<T>): boolean {
    return this.value === choice.getValue()
  }
}