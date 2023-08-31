<template>
  <component 
    :is="tag" 
    class="container"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
  interface Props {
    tag: 'div' | 'section'
  }

  withDefaults(defineProps<Props>(),{
    tag:'div'
  })
  
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/variables";
  .container {
    --container-width: #{variables.$mobile-xs};

    width: var(--container-width);
    margin:0 auto;

    @media (min-width: variables.$mobile){
      --container-width: #{variables.$mobile};
    }

    @media (min-width: variables.$tablet){
      --container-width: #{variables.$tablet};
    }

    @media(min-width: variables.$desktop){
      --container-width: #{variables.$desktop};
    }
  }
</style>