<template>
  <Container tag="section">
    <Card class="quiz">
      <ListChoice 
        v-model="selectedValue"
        :choices="choices" 
        :show="isChoicesShowed"
        @transition-end="isChoicesTransitionEnded = !isChoicesTransitionEnded"
      />
      <Button 
        role="primary" 
        @click="change"
      >
        Next
      </Button>
    </Card>
  </Container>
</template>

<script setup>
  import Card from '@/components/ui/atoms/Card.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import ListChoice from '../ui/molecules/ListChoice.vue';
  import { onMounted, ref } from 'vue';
  import Button from '../ui/atoms/Button.vue';

  onMounted(() => {
    setTimeout(() => {
      toggleListChoice()
    }, 500)
  })

  const selectedValue = ref('');
  const choices = ref([
    {label:'Vietnam', correct:false, value:1},
    {label:'Malaysia', correct:true, value:2},
    {label:'Sweden', correct:false, value:3},
    {label:'Austria', correct:false, value:4},
  ])
  
  const change = async () => {
    await toggleListChoice()
    choices.value = [
      {label:'as', correct:false, value:1},
      {label:'as', correct:true, value:2},
      {label:'as', correct:false, value:3},
      {label:'as', correct:false, value:4},
    ]
    toggleListChoice()
  }

  const isChoicesShowed = ref(false)
  const isChoicesTransitionEnded = ref(true)
  const toggleListChoice = () => {
    isChoicesTransitionEnded.value = !isChoicesTransitionEnded.value
    isChoicesShowed.value = !isChoicesShowed.value
    return new Promise(resolve => {
      (function loop(){
        setTimeout(() => {
          if (isChoicesTransitionEnded.value) return resolve()
          loop()
        },100)
      })()
    })
  }

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