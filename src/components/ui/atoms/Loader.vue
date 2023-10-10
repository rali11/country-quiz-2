<template>
  <span class="loader__spinner"></span>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    size?:number
  }

  const props = withDefaults(defineProps<Props>(),{
    size:32
  })

  const size = computed(() => `${props.size}px`)

</script>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';
  .loader {
    &__spinner {
      width: v-bind(size);
      height: v-bind(size);
      border: 4px solid variables.$border-loader-question;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation .8s linear infinite;
    }
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