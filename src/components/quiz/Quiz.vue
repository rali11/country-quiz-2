<template>
  <Container tag="section">
    <Card ref="card" class="quiz">
      <template v-if="quiz !== null">
        <Question :show="showQuestion" :question="quiz.getQuestion()"/>
        <ListChoice 
          ref="listChoice"
          v-model="selectedValue"
          :validate-choice="quiz.validateAnswer.bind(quiz)"
          :choices="quiz.getChoices()"
        />
        <div class="button-next">
          <transition name="fade" mode="out-in">
            <Button 
              v-if="showButton"
              role="primary" 
              @click="change"
            >
              Next
            </Button>
          </transition>
        </div>
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
  import { computed, onMounted, ref, watch} from 'vue'
  import type { ChoiceInterface, QuizInterface } from '@/models'
  import { useAppStore } from '@/store'

  const { quizStore } = useAppStore()
  const { actions: quizStoreActions } = quizStore
  
  const card = ref<InstanceType<typeof Card> | null>(null)
  const listChoice = ref<InstanceType<typeof ListChoice> | null>(null)
  const selectedValue = ref<ChoiceInterface>();
  const showQuestion = ref(false)
  const showButton = ref(false)

  const quiz = computed((): QuizInterface =>{
    return quizStore.getters.quiz as QuizInterface
  })

  watch(() => selectedValue.value, () =>{
    showButton.value = true
    card.value?.resizeCardHeight()
  })
  
  onMounted(async () => {
    await quizStoreActions.loadQuiz()
    showQuestion.value = true
    card.value?.resizeCardHeight()
  })
  
  const change = async () => {
    showQuestion.value = false
    showButton.value = false
    await listChoice.value?.toggleList()
    await quizStoreActions.nextQuiz()
    showQuestion.value = true
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

      .button-next {
        display: flex;
        justify-content: end;
        margin-top: 2rem;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(10rem);
  }
</style>