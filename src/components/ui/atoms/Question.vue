<template>
  <div :class="['question', showClass]">
    <div class="question__loader" v-if="loading">
      <span class="loader"></span>
    </div>
    <img v-else class="question__flag-img" v-show="question.urlImg" :src="image" alt="">
    <h3>{{ question.question }}</h3>
  </div>
</template>

<script setup lang="ts">
  import type { QuestionInterface } from '@/models';
  import { computed, onMounted, ref, watch } from 'vue';

  interface Props {
    question: QuestionInterface
    show: boolean
  }

  const props = defineProps<Props>()
  const image = ref('')
  const loading = ref(false)
  
  const showClass = computed(() => props.show ? 'question--show':'')

  onMounted(() => {
    if (props.question.urlImg !== undefined){
      loadImage(props.question.urlImg)
    }
  })

  watch(() => props.question.urlImg, async (urlImg) => {
    if (urlImg !== undefined){
      loadImage(urlImg)
    }
  })

  async function loadImage(urlImg: string){
    loading.value = true
    const response = await fetch(urlImg)
    const blob = await response.blob()
    image.value = URL.createObjectURL(blob);
    console.log(image.value)
    loading.value = false
  }

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

    &__loader {
      width: 5.25rem;
      height: 3.37rem;
      border-radius: 4px;  
      margin-bottom:1rem;
      display: flex;
      align-items: center;
      justify-content: center;

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

  .loader {
    width: 32px;
    height: 32px;
    border: 4px solid variables.$border-loader-question;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation .8s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 

</style>