<template>
  <Quiz />
  <footer>
    <p>created by <a href="https://github.com/rali11">rali11</a> - devChallenges.io</p>
  </footer>
</template>

<script setup lang="ts">
import Quiz from './views/Quiz/Quiz.vue'

</script>

<style lang="scss">
  @use "@/assets/styles/settings/variables"; 

  #app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  footer {
    font-size: variables.$fs-footer;
    font-weight: 400;
    font-family: variables.$font-family-footer;

    a {
      font-weight: 600;
    }
  }
</style>