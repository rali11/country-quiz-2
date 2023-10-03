<template>
  <div class="question">
    <img class="question__flag-img" v-show="question.urlImg" :src="question.urlImg" alt="">
    <h3>{{ question.question }}</h3>
  </div>
</template>

<script setup lang="ts">
  import type { QuestionInterface } from '@/models';

  interface Props {
    question: QuestionInterface
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';
  .question {
    &__flag-img {
      width: 5.25rem;
      height: 3.37rem;
      filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
      border-radius: 4px;  
      margin-bottom:1rem;
    }
    h3 {
      color: variables.$text-primary-dark;
      margin-bottom: 2rem;
    }
  }
</style>