<template>
  <div class="list-choice">
    <Choice 
      v-for="(choice, index) in listChoice" 
      :key=" index"
      :name="nameListChoice"
      :model="choice.value" 
      :state="choice.state"
      :show="choice.show"
      @transition-end="choice?.transitionEndListener"
      @checked="checkedEvent"
    />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch  } from 'vue'
  import Choice from '../../atoms/Choice/Choice.vue'
  import type { ChoiceInterface } from '@/models';
  import { useListChoice, type ListChoice } from './useListChoice';

  interface Props {
    modelValue?: ChoiceInterface
    choices: ChoiceInterface[]
    validateChoice: (choice: ChoiceInterface) => boolean
  }

  const emits = defineEmits(['update:modelValue'])
  const props = defineProps<Props>()
  const {listChoice, setListChoice, toggleList} = useListChoice()
  const nameListChoice = ref(Date.now().toString())

  onMounted(() => {    
    setListChoice(props.choices)
    //toggleList()
  })

  watch(() => props.choices, choices => {
    nameListChoice.value = Date.now().toString()
    setListChoice(choices)
  })

  const checkedEvent = (selectedChoice: ChoiceInterface) => {
    listChoice.value.forEach(choice => choice.state = 'disabled')
    const correctChoice = listChoice.value.find(choice => props.validateChoice(choice.value)) as ListChoice
    correctChoice.state = 'success'
    if (!selectedChoice.isEqualTo(correctChoice.value)) {
      (listChoice.value.find(choice => choice.value.isEqualTo(selectedChoice)) as ListChoice).state = 'error'
    }
    emits('update:modelValue', selectedChoice)
  }

  defineExpose({toggleList})

</script>

<style lang="scss" scoped>
  .list-choice {
    counter-reset: counterChoice;  
    width: 100%; 
  }
</style>