<template>
  <div>
    <h3>{{ question }}</h3>
  </div>
</template>

<script setup>
  defineProps({
    question:{
      type:String,
      default:''
    }
  })
</script>

<style lang="scss" scoped>

</style>