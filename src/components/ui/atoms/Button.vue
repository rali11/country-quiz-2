<template>
  <button :class="['button',buttonRole]">
    <slot />
  </button>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    role:{
      type: String,
      default: 'primary',
      validator: role => ['primary','secondary'].includes(role),
    }
  })

  const buttonRole = computed(() => `button--${props.role}`)
</script>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';

  .button {
    line-height: 1.68rem;
    padding: 15px 37px;
    border-radius: .7rem;
    font-size: variables.$fs-btn;
    border: .12rem solid;
    transition: all .2s;
    font-weight: 700;
    
    &--primary,
    &--secondary:hover {
      border-color: variables.$border-btn-primary;
      box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
      background-color: variables.$bg-btn-primary;
      color: variables.$text-primary-lighter;
      transition: all .2s;
    }

    &--secondary {
      border-color: variables.$border-btn-secondary;
      background-color: transparent;
      color: variables.$text-primary-dark;
      transition: all .2s;
    }
  }
</style>