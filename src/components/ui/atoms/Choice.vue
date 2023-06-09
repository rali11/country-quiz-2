<template>
  <label ref="choiceDomElement" :class="['choice', choiceStateClass, choiceShowClass]">
    <span>
      <slot/>
    </span>
    <input 
      ref="inputDomElement"
      type="radio" 
      :name="name"
      :value="value"
      :disabled="!!state"
      @change="checkedEvent" 
    >
  </label>
</template>
<script setup>
  import { computed, onMounted, ref, watch } from 'vue';

  const props = defineProps({
    state:{
      type: String,
      default:'',
      validator(state){
        return ['success','error','disabled',''].includes(state) 
      },
    },
    name: {
      type: String,
      default: 'list-choice'
    },
    value:{
      type: [String, Number, Object, Array],
      default:'',
    },
    show:{
      type: Boolean,
      default:false
    }
  })
  const emit = defineEmits(['transition-end','checked'])
  
  const inputDomElement = ref(null)

  const choiceShowClass = computed(() => props.show ? 'choice--show':'')
  const choiceDomElement = ref(null);
  onMounted(() => {
    watch(() => props.show, newVal => {
      const transitionEndListener = () => {
        emit('transition-end', {isShowTransition: newVal, value: props.value})
        choiceDomElement.value.removeEventListener('transitionend', transitionEndListener)
      }
      choiceDomElement.value.addEventListener('transitionend', transitionEndListener)
    })
    watch(() => props.name, () => {
      inputDomElement.value.checked = false
    })
  })

  const checkedEvent = () => {
    !props.state && emit('checked', props.value)
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