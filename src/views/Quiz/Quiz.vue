<template>
  <Container tag="section" >
    <div class="quiz-header">
      <h2 class="quiz-header__title">COUNTRY QUIZ</h2>
      <img class="quiz-header__image" :src="image" alt="">
    </div>
    <Card :height="cardHeight" ref="card" class="card-quiz">
      <Transition name="fade" mode="out-in">
        <div class="quiz__loader" v-if="isLoading && !isShowResults">
          <Loader :size="loaderSize"/>
          <h2>Loading...</h2>
        </div>
        <div v-else>
          <Transition name="fade-slide" mode="out-in" tag="div">
            <Results v-if="isShowResults" @try-again="tryAgain"/>
            <Quiz v-else @show-results="showResults"/>      
          </Transition>
        </div>
      </Transition>
    </Card>
  </Container>
</template>

<script setup lang="ts">
  import Card from '@/components/ui/atoms/Card.vue'
  import Container from '@/components/ui/objects/Container.vue'
  import image from '@/assets/img/undraw_adventure_4hum 1.svg';
  import Quiz from '@/components/quiz/Quiz.vue';
  import Results from '@/components/quiz/Results.vue';
  import { computed, onMounted, ref, watch } from 'vue';
  import { useAppStore } from '@/store';
  import Loader from '@/components/ui/atoms/Loader.vue';

  const isShowResults = ref(false)
  const isLoading = ref(true)
  const { quizStore } = useAppStore()
  const { actions: quizStoreActions } = quizStore
  const cardHeight = ref(300)
  const computedCardHeight = computed(() => `${cardHeight.value}px`)
  const loaderSize = ref(82)

  watch(() => quizStore.getters.loading, loading => {
    isLoading.value = loading
  })

  onMounted(() => {
    quizStoreActions.loadQuiz()
  })

  async function tryAgain(){
    isShowResults.value = false
    await quizStoreActions.loadQuiz()
  }

  function showResults(){
    isShowResults.value = true
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
      position: relative;
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
    .quiz__loader{
      height: v-bind(computedCardHeight);
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      color: variables.$text-primary;
    }
  }

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all .8s ease;
  }

  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(10rem);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


</style>