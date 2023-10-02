import { ref } from 'vue';
import type { ChoiceState } from '../../atoms/Choice/ChoiceState'
import type { ChoiceInterface} from '@/models';

export interface ListChoice {
  state: ChoiceState
  show: boolean
  label: string
  value: ChoiceInterface,
  transitionEndListener?: () => void
}

export const useListChoice = () => {
  const listChoice = ref<ListChoice[]>([])
  const isShowListChoice = ref(false)
  const isToggleTransitionEnded = ref(true)

  const setListChoice = (choices:ChoiceInterface[]) => {
    listChoice.value = choices.map(choice => (
      {
        state:'disabled',
        show: false,
        label:choice.getLabel(),
        value:choice,
      }
    ))
    //agregamos el metodo opcional transitionEndListener unicamente al ultimo elemento del array
    listChoice.value[listChoice.value.length-1].transitionEndListener = () => {
      listChoice.value.forEach(choice => choice.state = '')
      isToggleTransitionEnded.value = true
    }
  }

  const toggleList = (): Promise<void> => {
    isShowListChoice.value = !isShowListChoice.value
    isToggleTransitionEnded.value = false
    toggle()

    return new Promise(resolve => {
      (function loop(){
        setTimeout(() => {
          if (isToggleTransitionEnded.value) return resolve()
          loop()
        },100)
      })()
    })
  }

  const toggle = () => {
    const nextChoiceToToggle = listChoice.value.find(choice => choice.show !== isShowListChoice.value)
    if (nextChoiceToToggle){
      setTimeout(() => {
        nextChoiceToToggle.state = 'disabled'
        nextChoiceToToggle.show = isShowListChoice.value
        toggle()
      }, 100)
    }
  }
  
  return {
    setListChoice,
    listChoice,
    toggleList
  }
}
