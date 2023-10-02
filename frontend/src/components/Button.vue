<template>
    <button class="mt-[20px] border-2 border-black h-[50px] text-[20px] text-white" :style="CLASS" @click="$emit('click')">{{ text }}</button>
</template>
<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
  text: String,
  rounded: Number || undefined,
  background: String || undefined,
  with: Number
})
const emit = defineEmits([
    "click"
])
const CLASS = {
  'width': props.with +'px',
  'borderRadius': props.rounded +'px',
  'background' : props.background,
}
</script>