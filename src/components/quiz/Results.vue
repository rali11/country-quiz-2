<template>
  <div class="results">
    <img :src="image" class="results__image-winner">
    <h1>Results</h1>
    <p class="results__subtitle">
      You got 
      <span class="results__correct-answers">{{ correctAnswers }}</span> 
      correct answers
    </p>
    <Button 
      class="results__cta" 
      role="secondary" 
      @click="$emit('try-again')"
    >
      Try again
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';
import Button from '../ui/atoms/Button.vue';
import { computed } from 'vue';
import image from '@/assets/img/undraw_winners_ao2o 2.svg';

defineEmits(['try-again'])

const { quizStore } = useAppStore()


const correctAnswers = computed(() => {
  return quizStore.getters.lenghtCompletedQuiz-1
})


</script>

<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";
  .results {
    height: 461px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: variables.$text-primary-dark;

    &__subtitle {
      font-size: variables.$fs-subtitle;
      font-weight: lighter;
    }

    &__correct-answers {
      color: variables.$text-correct-answers;
      font-size: variables.$fs-title-2;
      font-weight: 700;
    }

    &__cta {
      margin-top: 3rem;
      font-weight: 500;
      padding-left: 3.4rem;
      padding-right: 3.4rem;
    }

    &__image-winner {
      margin-bottom: 4rem;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .7s ease .5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(10rem);
  }
</style>