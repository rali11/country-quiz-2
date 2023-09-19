import { ref } from 'vue'

export const useToggleList = () => {
  const isChoicesShowed = ref(false)
  const isChoicesTransitionEnded = ref(true)

  const toggleListChoice = () => {
    isChoicesTransitionEnded.value = !isChoicesTransitionEnded.value
    isChoicesShowed.value = !isChoicesShowed.value
    return new Promise(resolve => {
      (function loop(){
        setTimeout(() => {
          if (isChoicesTransitionEnded.value) return resolve('done')
          loop()
        },100)
      })()
    })
  }

  return {
    isChoicesShowed,
    isChoicesTransitionEnded,
    toggleListChoice
  }
}