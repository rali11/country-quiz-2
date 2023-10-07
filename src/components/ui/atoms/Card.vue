<template>
  <article ref="card" class="card">
    <div ref="cardBody" class="card__body">
      <slot/>
    </div>
  </article>
</template>

<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from 'vue';

  const card = ref<HTMLElement | null>(null)
  const cardBody = ref<HTMLDivElement | null>(null)
  const observer = ref<MutationObserver | null>(null)
  
  const padding = ref(0)
  const height = ref(0)
  const computedHeight = computed(() => `${height.value+padding.value}px`)

  onMounted(() => {
    const computedStyleCard = getComputedStyle(card.value as HTMLElement)
    padding.value = parseInt(computedStyleCard.getPropertyValue('padding-top')) + parseInt(computedStyleCard.getPropertyValue('padding-bottom'))

    const config = { attributes: true, childList: true, subtree: true }
    observer.value = new MutationObserver(resizeCardHeight);
    observer.value?.observe(cardBody.value as HTMLDivElement, config);
  })  

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  function resizeCardHeight(){
    const computedStyleCardBody = getComputedStyle(cardBody.value as HTMLDivElement)
    height.value = parseInt(computedStyleCardBody.getPropertyValue('height'))
  }
</script>

<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";
  .card {
    border-radius: 24px;
    background-color: variables.$bg-lighter;
    padding: 2rem;
    overflow: hidden;
    height: v-bind(computedHeight);
    transition: height .5s;

    &__body {
      width: 100%;
      margin:0;
      height: auto;
    }
  }
</style>