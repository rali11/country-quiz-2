<template>
  <Container tag="section">
    <Card class="quiz">
      <Question :question="quiz.getQuestion()"/>
      <ListChoice 
        v-model="selectedValue"
        :show="isChoicesShowed"
        :validate-choice="quiz.validateAnswer.bind(quiz)"
        :choices="quiz.getChoices()"
        @transition-end="isChoicesTransitionEnded = !isChoicesTransitionEnded"
      />
      <Button 
        role="primary" 
        @click="change"
      >
        Next
      </Button>
    </Card>
  </Container>
</template>

<script setup lang="ts">
  import Card from '@/components/ui/atoms/Card.vue'
  import Container from '@/components/ui/objects/Container.vue'
  import ListChoice from '../ui/molecules/ListChoice/ListChoice.vue'
  import Question from '../ui/atoms/Question.vue'
  import Button from '../ui/atoms/Button.vue'
  import { onMounted, ref, watch} from 'vue'
  import { useToggleList } from './useToggleList'
  import { useQuiz } from './useQuiz'
  import type { ChoiceInterface } from '@/models'

  const { toggleListChoice, isChoicesShowed, isChoicesTransitionEnded } = useToggleList()
  const { quiz, nextQuiz, listCompletedQuiz } = useQuiz()

  const correctAnswers = ref(0)
  const selectedValue = ref<ChoiceInterface>();

  watch(() => selectedValue.value, value => {
    if (value !== undefined) {
      quiz.value.validateAnswer(value) && correctAnswers.value++
    }
  })
  
  onMounted(async () => {
    await toggleListChoice()
  })
  
  const change = async () => {
    await toggleListChoice()
    nextQuiz()
    toggleListChoice()
  }

</script>
<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";
  .container {
    margin: auto;
    display: flex;
    justify-content: center;
    color: black;
    .quiz {
      width: 29rem;
      padding-top: 4.35rem;
      padding-bottom: 2rem;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(-10rem);
    opacity: 0;
  }
</style>@/models/Choice/CountryChoice