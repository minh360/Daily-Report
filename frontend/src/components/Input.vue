<template>
    <input
            v-model="value"
            class="rounded-[25px] ring-4 border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]"
            :style="CLASS"
            :placeholder="placeholder"
          />
</template>
<script setup>
import {computed} from 'vue'
const props = defineProps({ 'width': Number ,'modelValue': String ,'placeholder': String})
const emit = defineEmits(['update:modelValue'])
const CLASS = {
    'width': props.width+'px'
}
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>