<template>
  <div>
    <img v-show="urlImg" :src="urlImg" alt="">
    <h2>{{ question }}</h2>
  </div>
</template>

<script setup lang="ts">
  import type { Question } from '@/models/Question';

  defineProps<Question>()
</script>

<style scoped>

</style>