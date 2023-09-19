export abstract class Choice<T>{
  protected abstract label: string
  protected abstract value: T

  getLabel(): string {
    return this.label
  }

  getValue(): T {
    return this.value
  }

  isEqualTo(choice: Choice<T>){
    return choice.getValue() === this.value
  }
}