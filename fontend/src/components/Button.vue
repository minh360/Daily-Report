<template>
    <button class="mt-[20px] border-2 border-black h-[50px] text-[20px] text-white" :class="CLASS" @click="$emit('click')">{{ text }}</button>
</template>
<script setup>
import {ref, defineProps, defineEmits} from 'vue'

const props = defineProps({
  text: String,
  rounded: Number || undefined,
  background: String || undefined,
  with: Number
})
const emit = defineEmits([
    "click"
])
const CLASS = "w-["+props.with+"px] bg-["+props.background+"] rounded-["+props.rounded+"px]"
</script>