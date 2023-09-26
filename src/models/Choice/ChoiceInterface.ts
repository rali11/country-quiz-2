export interface ChoiceInterface {
  getLabel: () => string
  getValue: () => string | number
  isEqualTo: (choice: ChoiceInterface) => boolean
}