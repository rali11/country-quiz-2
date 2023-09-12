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

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import type { Ref } from 'vue';
  import Choice from '../../atoms/Choice/Choice.vue';
  import { Choice as ModelChoice } from '@/models/Choice/Choice'
  import type { ChoiceState } from '../../atoms/Choice/ChoiceState';

  interface Props {
    modelValue: ModelChoice
    choices: ModelChoice[]
    show: boolean
    validateChoice: (choice: ModelChoice) => boolean
  }

  interface ListChoice {
    state: ChoiceState
    show: boolean
    label: string
    value: ModelChoice
  }

  const props = withDefaults(defineProps<Props>(),{
    show:false
  })

  const nameListChoice = ref(Date.now().toString())
  const emits = defineEmits(['update:modelValue','transition-end'])

  const listChoice: Ref<ListChoice[]> = ref([])
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

  const checkedEvent = (selectedChoice: ListChoice) => {
    listChoice.value.forEach(choice => choice.state = 'disabled')
    const correctChoice = listChoice.value.find(choice => props.validateChoice(choice.value)) 
    if (correctChoice !== undefined){
      correctChoice.state = 'success'
      if (selectedChoice !== correctChoice) selectedChoice.state = 'error'
      emits('update:modelValue', selectedChoice.value)
    }
  }

</script>

<style lang="scss" scoped>
  .list-choice {
    counter-reset: counterChoice;  
    width: 100%; 
  }
</style>
