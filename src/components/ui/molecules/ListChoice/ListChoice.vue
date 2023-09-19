<template>
  <div class="list-choice">
    <Choice 
      v-for="(choice, index) in listChoice" 
      :key=" index"
      :name="nameListChoice"
      :value="choice.value" 
      :state="choice.state"
      :show="choice.show"
      @transition-end="index === listChoice.length-1 && transitionEndListener($event)"
      @checked="checkedEvent"
    >
      {{ choice.label }}
    </Choice>
  </div>
</template>

<script setup lang="ts" generic="T">
  import { ref, watch, type Ref,  } from 'vue'
  import Choice from '../../atoms/Choice/Choice.vue'
  import { Choice as ModelChoice } from '@/models/Choice/Choice'
  import type { ChoiceState } from '../../atoms/Choice/ChoiceState'
import type { Choices } from '@/models/Quiz/Quiz'
  
  export interface ListChoice<T> {
    state: ChoiceState
    show: boolean
    label: string
    value: ModelChoice<T>
  }

  export interface Props<T> {
    show: boolean
    modelValue?: ModelChoice<T>
    choices: Choices<T>
    validateChoice: (choice: ModelChoice<T>) => boolean
  }

  const props = withDefaults(defineProps<Props<T>>(),{
    show:false,
  })

  const nameListChoice = ref(Date.now().toString())
  const emits = defineEmits(['update:modelValue','transition-end'])

  const listChoice: Ref<ListChoice<T>[]> = ref([])
  const setListChoice = (isShow: boolean) => {
    listChoice.value = props.choices.map(choice => (
      {
        state:'disabled',
        show: isShow,
        label:choice.getLabel(),
        value:choice,
      }
    ))
  }
  setListChoice(false)
  watch(() => props.choices, () => {
    setListChoice(false)
  })

  watch(() => props.show, show => {
    const toggleListChoice = (isShow: boolean) => {
      const nextChoiceToToggle = listChoice.value.find(choice => choice.show !== isShow)
      if (nextChoiceToToggle){
        nextChoiceToToggle.state = 'disabled'
        nextChoiceToToggle.show = isShow
        setTimeout(() => toggleListChoice(isShow), 200)
      }
    }
    toggleListChoice(show)
  })
  const transitionEndListener = ({isShowTransition}:{isShowTransition: boolean}) => {
    if (isShowTransition) {
      listChoice.value.forEach(choice => choice.state = '')
    } else {
      setListChoice(false)
      nameListChoice.value = Date.now().toString()
    }
    emits('transition-end')
  }

  const checkedEvent = (selectedChoice: ModelChoice<T>) => {
    listChoice.value.forEach(choice => choice.state = 'disabled')
    const correctChoice = listChoice.value.find(choice => props.validateChoice(choice.value)) as ListChoice<T>
    correctChoice.state = 'success'
    if (!selectedChoice.isEqualTo(correctChoice.value)) {
      (listChoice.value.find(choice => choice.value.isEqualTo(selectedChoice)) as ListChoice<T>).state = 'error'
    }
    emits('update:modelValue', selectedChoice)
  }

</script>

<style lang="scss" scoped>
  .list-choice {
    counter-reset: counterChoice;  
    width: 100%; 
  }
</style>
