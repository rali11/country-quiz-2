<template>
  <Container tag="section">
    <Card ref="card" class="quiz">
      <template v-if="quiz !== null">
        <Question :question="quiz.getQuestion()"/>
        <ListChoice 
          ref="listChoice"
          v-model="selectedValue"
          :validate-choice="quiz.validateAnswer.bind(quiz)"
          :choices="quiz.getChoices()"
        />
        <Button 
          role="primary" 
          @click="change"
        >
          Next
        </Button>
      </template>
    </Card>
  </Container>
</template>

<script setup lang="ts">
  import Card from '@/components/ui/atoms/Card.vue'
  import Container from '@/components/ui/objects/Container.vue'
  import ListChoice from '../ui/molecules/ListChoice/ListChoice.vue'
  import Question from '../ui/atoms/Question.vue'
  import Button from '../ui/atoms/Button.vue'
  import { computed, onMounted, ref} from 'vue'
  import type { ChoiceInterface, QuizInterface } from '@/models'
  import { useAppStore } from '@/store'

  const { quizStore } = useAppStore()
  const { actions: quizStoreActions } = quizStore
  
  const card = ref<InstanceType<typeof Card> | null>(null)
  const listChoice = ref<InstanceType<typeof ListChoice> | null>(null)
  const selectedValue = ref<ChoiceInterface>();

  const quiz = computed((): QuizInterface =>{
    return quizStore.getters.quiz as QuizInterface
  })
  
  onMounted(async () => {
    await quizStoreActions.loadQuiz()
    card.value?.resizeCardHeight()
  })
  
  const change = async () => {
    await listChoice.value?.toggleList()
    await quizStoreActions.nextQuiz()
    listChoice.value?.toggleList()
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
</style>