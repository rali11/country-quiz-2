<template>
  <article class="card">
    <slot/>
  </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";
  .card {
    border-radius: 24px;
    background-color: variables.$bg-lighter;
    padding: 2rem;
  }
</style>