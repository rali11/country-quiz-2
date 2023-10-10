<template>
  <div class="quiz" v-if="quiz !== null">
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
</template>

<script setup lang="ts">
  import ListChoice from '../ui/molecules/ListChoice/ListChoice.vue'
  import Question from '../ui/atoms/Question.vue'
  import Button from '../ui/atoms/Button.vue'
  import { computed, onMounted, ref, watch} from 'vue'
  import type { ChoiceInterface, QuizInterface } from '@/models'
  import { useAppStore } from '@/store'

  const { quizStore } = useAppStore()
  const { actions: quizStoreActions } = quizStore

  const emits = defineEmits(['show-results'])

  const listChoice = ref<InstanceType<typeof ListChoice> | null>(null)
  const selectedValue = ref<ChoiceInterface>();
  const showQuestion = ref(false)
  const showButton = ref(false)

  const quiz = computed((): QuizInterface =>{
    return quizStore.getters.quiz as QuizInterface
  })

  watch(() => selectedValue.value, () =>{
    showButton.value = true
  })
  
  onMounted(async () => {
    await quizStoreActions.nextQuiz()
    setTimeout(() => {
      showQuestion.value = true
      listChoice.value?.toggleList()
    },300)
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
    await listChoice.value?.toggleList()
    emits('show-results')
  }


</script>
<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";

  .button-next {
    display: flex;
    justify-content: end;
    margin-top: 2rem;
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