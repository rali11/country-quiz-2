<template>
  <Container tag="section" >
    <div class="quiz-header">
      <h2 class="quiz-header__title">COUNTRY QUIZ</h2>
      <Transition name="fade">
        <img v-if="showLogoQuiz" class="quiz-header__image" :src="image" alt="">
      </Transition>      
    </div>
    <Card ref="card" class="card-quiz">
      <template v-if="quiz !== null">
        <Transition name="fade" mode="out-in">
          <Results v-if="showResults" @try-again="resetQuiz"/>     
          <div v-else>
            <Question :show="showQuestion" :question="quiz.getQuestion()"/>
            <ListChoice 
              ref="listChoice"
              v-model="selectedValue"
              :validate-choice="quiz.validateAnswer.bind(quiz)"
              :choices="quiz.getChoices()"
            />
            <div class="button-next">
              <Transition name="fade" mode="out-in">
                <Button 
                  v-if="showButton"
                  role="primary" 
                  @click="change"
                >
                  Next
                </Button>
              </Transition>
            </div>
          </div>
        </Transition>
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
  import image from '@/assets/img/undraw_adventure_4hum 1.svg';
  import Results from './Results.vue'

  const { quizStore } = useAppStore()
  const { actions: quizStoreActions } = quizStore
  
  const card = ref<InstanceType<typeof Card> | null>(null)
  const listChoice = ref<InstanceType<typeof ListChoice> | null>(null)
  const selectedValue = ref<ChoiceInterface>();
  const showQuestion = ref(false)
  const showButton = ref(false)
  const showResults = ref(false)
  const showLogoQuiz = ref(true)

  const quiz = computed((): QuizInterface =>{
    return quizStore.getters.quiz as QuizInterface
  })

  watch(() => selectedValue.value, () =>{
    showButton.value = true
  })
  
  onMounted(async () => {
    await quizStoreActions.loadQuiz()
    showQuestion.value = true
  })
  
  async function change (){
    if(quiz.value.validateAnswer(selectedValue.value as ChoiceInterface)){
      showQuestion.value = false
      showButton.value = false
      await listChoice.value?.toggleList()
      await quizStoreActions.nextQuiz()
      showQuestion.value = true
      listChoice.value?.toggleList()
      return
    }
    showQuestion.value = false
    showButton.value = false
    showLogoQuiz.value = false
    await listChoice.value?.toggleList()
    showResults.value = true
    return
  }

  async function resetQuiz(){
    showResults.value = false
    showLogoQuiz.value = true
    await quizStoreActions.loadQuiz()
    showQuestion.value = true
    listChoice.value?.toggleList()
  }

</script>
<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";
  .container {
    margin: auto;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    color: black;
    .card-quiz {
      width: 29rem;
      padding-top: 4.35rem;
      padding-bottom: 2rem;
      position: relative;

      .button-next {
        display: flex;
        justify-content: end;
        margin-top: 2rem;
      }
    }

    .quiz-header {
      position: relative;
      width: 100%;
      z-index: 1;

      &__title {
        color: variables.$text-primary-light;
      }
      &__image {
      position: absolute;
      bottom:-2.5rem;
      right: 0;
    }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(10rem);
  }
</style>