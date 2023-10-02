<script setup>
import {ref} from 'vue'
import { RouterView } from 'vue-router'
const text = ref('HAVE A GOOD DAY')
</script>

<template>
  <header>
    <img src="@/assets/banner.jpg" class="w-full h-full absolute z-[-1]"/>
    <RouterView />
  </header>
</template>

<style scoped>

</style>
