<template>
  <Container tag="section">
    <Card class="quiz">
      <h1>Hola mundo</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis natus molestias ratione similique quaerat consequuntur reiciendis, at dignissimos vero vitae est enim, ipsam eveniet quasi, voluptas id? Rem, hic!</p>
    </Card>
  </Container>
</template>

<script setup>
  import Card from '@/components/ui/atoms/Card.vue';
  import Container from '@/components/ui/objects/Container.vue';
  
</script>
<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";
  .container {
    margin: auto;
    display: flex;
    justify-content: center;
    color: black;
    .quiz {
      width: 29rem;
      padding-top: 4.35rem;
      padding-bottom: 2rem;
    }
  }
</style>