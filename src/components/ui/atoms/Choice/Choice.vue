<template>
  <label ref="choiceDomElement" :class="['choice', choiceStateClass, choiceShowClass]">
    <span>
      {{ model.getLabel() }}
    </span>
    <input 
      ref="radioElement"
      type="radio" 
      :name="name"
      :value="model.getValue()"
      :disabled="!!state"
      @change="checkedEvent" 
    >
  </label>
</template>
<script setup lang="ts">
  import type { ChoiceInterface } from '@/models';
  import type { ChoiceState } from './ChoiceState';
  import { computed, onMounted, ref, watch } from 'vue';

  interface Props {
    state: ChoiceState
    name: string
    model: ChoiceInterface
    show: boolean
  }

  const props =  withDefaults(defineProps<Props>(),{
    state:'',
    name:'list-choice',
    show: false
  })

  const emit = defineEmits(['transition-end','checked'])
  
  const choiceShowClass = computed(() => props.show ? 'choice--show':'')
  const choiceDomElement = ref<HTMLLabelElement>();
  const radioElement =  ref<HTMLInputElement>()

  onMounted(() => {
    watch(() => props.show, newVal => {
      const transitionEndListener = () => {
        emit('transition-end', {isShowTransition: newVal, value: props.model})
        choiceDomElement.value?.removeEventListener('transitionend', transitionEndListener)
      }
      choiceDomElement.value?.addEventListener('transitionend', transitionEndListener)
    })

    watch(() => props.name, () => {
      if (radioElement.value !== undefined) {
        radioElement.value.checked = false
      }
    })
  })

  const checkedEvent = () => {
    !props.state && emit('checked', props.model)
  }
  
  const choiceStateClass = computed(() => props.state ? `choice--${props.state}`:'')
  
</script>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';

  .choice {
    & ~ & {
      margin-top: 1.56rem;;
    }

    position: relative;
    width: 100%;
    padding: 0.7rem 4rem 0.7rem 5.12rem;
    display: flex;
    flex-direction: column;
    color: variables.$text-choice-quiz;
    font-size: variables.$fs-list;
    border: 2px solid variables.$border-choice-quiz;
    border-radius: .75rem;
    list-style: none;
    counter-increment: counterChoice;
    opacity: 0;
    transform: translateX(-10rem);
    transition: all .5s ease;   
    
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: auto;
    }

    &:hover {
      background-color: variables.$bg-choice-quiz-hover;
      border-color: variables.$border-choice-quiz-hover;
      color: variables.$text-primary-lighter;
      transition: all .5s;      
    }

    &::before {
      position: absolute;
      left: 1.18rem;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: variables.$fs-counter;
      content: counter(counterChoice, upper-alpha);
    }

    &--show {
      transition: all .5s ease;
      transform: translateX(0);
      opacity: 1;
    }

    &--disabled, 
    &--disabled:hover {
      border: 2px solid variables.$border-choice-quiz;
      background-color: transparent;
      color: variables.$text-choice-quiz;
    }

    &--success, 
    &--success:hover {
      background-color: variables.$state-success;
      border-color: variables.$state-success;
      color: variables.$text-primary-lighter;  
      position: relative;    
      animation: state-success .9s ease-in-out; 
    }         

    &--error, 
    &--error:hover {
      background-color: variables.$state-error;
      border-color: variables.$state-error;
      color: variables.$text-primary-lighter;   
      position: relative;      
    }

    &--success::after, 
    &--error::after { 
      position: absolute;
      height: 100%;
      top: 0;
      right: 1.1rem;  
      display: flex;
      align-items: center;
      font-family: 'Material Symbols Outlined';         
      font-size: variables.$fs-icons;      
      color: variables.$text-primary-light;      
    }

    &--success::after {
      content:"\e86c";   
    }

    &--error::after {
      content:"\e888";   
    }  
    
    input[type=radio] {
      display: none;
    }

    @keyframes state-success {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
</style>
@/models/Choice/CountryChoice