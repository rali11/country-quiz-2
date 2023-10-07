<template>
  <Container tag="section" >
    <div class="quiz-header">
      <h2 class="quiz-header__title">COUNTRY QUIZ</h2>
      <img class="quiz-header__image" :src="image" alt="">
    </div>
    <Card ref="card" class="card-quiz">
      <Transition name="fade" mode="out-in">
        <Results v-if="isShowResults" @try-again="tryAgain"/>
        <Quiz v-else @show-results="showResults"/>      
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
  import { ref } from 'vue';

  const isShowResults = ref(false)

  function tryAgain(){
    isShowResults.value = false
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
      width: 29rem;
      padding-top: 4.35rem;
      padding-bottom: 2rem;
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
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .8s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(10rem);
  }
</style>