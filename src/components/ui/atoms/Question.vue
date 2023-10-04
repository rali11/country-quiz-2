<template>
  <div :class="['question', showClass]">
    <img class="question__flag-img" v-show="question.urlImg" :src="question.urlImg" alt="">
    <h3>{{ question.question }}</h3>
  </div>
</template>

<script setup lang="ts">
  import type { QuestionInterface } from '@/models';
  import { computed } from 'vue';

  interface Props {
    question: QuestionInterface
    show: boolean
  }

  const props = defineProps<Props>()

  const showClass = computed(() => props.show ? 'question--show':'')
</script>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';
  .question {
    opacity: 0;
    transform: translateX(-10rem);
    transition: all .5s ease;    

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

    &--show {
      transition: all .5s ease;
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>