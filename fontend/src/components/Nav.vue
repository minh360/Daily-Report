<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    showNav: Boolean
})
const emit = defineEmits([
    "show"
])
</script>
<template>
    <main>
        <div class="flex items-center justify-between h-[70px] px-[20px]">
        <router-link to="/" class="text-[35px] italic font-semibold">Daily Report</router-link>
        <div class="nav-icon" :class="{ open: showNav }" @click="$emit('show')">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </main>
</template>

<style lang="scss" scoped>
.nav-icon {
  width: 50px;
  height: 40px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #000;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 16px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    &:nth-child(3) {
      top: 32px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  &.open {
    width: 51px;
    span {
      &:nth-child(1) {
        -webkit-transform: rotate(55deg);
        -moz-transform: rotate(55deg);
        -o-transform: rotate(55deg);
        transform: rotate(55deg);
        top: -3px;
        left: 8px;
      }

      &:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      &:nth-child(3) {
        -webkit-transform: rotate(-55deg);
        -moz-transform: rotate(-55deg);
        -o-transform: rotate(-55deg);
        transform: rotate(-55deg);
        top: 39px;
        left: 8px;
      }
    }
  }
}
</style>