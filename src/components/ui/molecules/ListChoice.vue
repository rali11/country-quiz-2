<template>
  <div class="list-choice">
    <Choice v-for="(choice, index) in listChoice" 
      :key="choice.value"
      :name="nameListChoice"
      :value="choice" 
      :state="choice.state"
      :show="choice.show"
      @transition-end="index === listChoice.length-1 && transitionEndListener($event)"
      @checked="checkedEvent"
    >
      {{ choice.label }}
    </Choice>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import Choice from '../atoms/Choice.vue'
  import { Choice as ModelChoice } from '@/models/Choice/Choice'

  const nameListChoice = ref(Date.now().toString())
  const emits = defineEmits(['update:modelValue','transition-end'])
  const props = defineProps({
    modelValue:{
      type: [String, Number, Object],
      default: '',
    },
    choices:{
      type: Array,
      default: () => [],
      validator(choices){
        return choices.every(choice => choice instanceof ModelChoice)
      }
    },
    validateChoice:{
      type: Function,
      default: () => {}
    },
    show:{
      type: Boolean,
      default:false,
    },
  })
  
  const listChoice = ref([])
  const setListChoice = isShow => {
    listChoice.value = props.choices.map(choice => (
      {
        state:'',
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
    const toggleListChoice = isShow => {
      const nextChoiceToToggle = listChoice.value.find(choice => choice.show !== isShow)
      if (nextChoiceToToggle){
        nextChoiceToToggle.state = 'disabled'
        nextChoiceToToggle.show = isShow
        setTimeout(() => toggleListChoice(isShow), 200)
      }
    }
    toggleListChoice(show)
  })
  const transitionEndListener = ({isShowTransition}) => {
    if (isShowTransition) {
      listChoice.value.forEach(choice => choice.state = '')
    } else {
      setListChoice(false)
      nameListChoice.value = Date.now().toString()
    }
    emits('transition-end')
  }

  const checkedEvent = selectedChoice => {
    listChoice.value.forEach(choice => choice.state = 'disabled')
    const correctChoice = listChoice.value.find(choice => props.validateChoice(choice.value))
    correctChoice.state = 'success'
    if (selectedChoice !== correctChoice) selectedChoice.state = 'error'
    emits('update:modelValue', selectedChoice.value)
  }

</script>

<style lang="scss" scoped>
  .list-choice {
    counter-reset: counterChoice;  
    width: 100%; 
  }
</style>