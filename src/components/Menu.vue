<script setup>
import { ref } from 'vue';
import Nav from './Nav.vue';
const props = defineProps({
  active: String | undefined,
  id: String | undefined,
})
const id = ref(props.id)
const showNav = ref(false)
</script>

<template>
  <div class="w-full h-[70px] z-[99999] fixed">
    <div class="blur-sm w-full h-[70px] opacity-50 bg-[#aafdfc] absolute"></div>
    <div class="absolute z-[2] w-full">
      <Nav :showNav="showNav" @show="() => {showNav = !showNav}"/>
      <div class="h-[150px] w-full blur-sm bg-[#3a7db9] absolute nav-drop-bg" :class="{ active: showNav }">
      </div>
      <div
        class="nav-drop w-full h-[150px] py-[20px] px-[20px] text-[25px] font-semibold absolute italic flex flex-row text-[black] justify-around"
        :class="{ active: showNav }" >
        <div class="flex flex-col gap-[20px]">
          <RouterLink to="/sign-up" :class="{ text_active: active == 'SignUp' }" v-if="props.id  == undefined"
            class="active:text-white active:border-[1] active:underline">Đăng Ký</RouterLink>
          <RouterLink :to="{path: '/auth/' + id + '/guess'}" :class="{ text_active: active == 'Guess' }" v-if="props.id != undefined"
            class="active:text-white active:border-[1] active:underline">Đoán vui</RouterLink>
        </div>
        <div class="flex flex-col gap-[20px]">
          <RouterLink to="/sign-in" :class="{ text_active: active == 'SignIn' }" v-if="props.id  == undefined"
            class="active:text-white active:border-[1] active:underline">Đăng Nhập</RouterLink>
          <RouterLink to="/" v-show="props.id  != undefined" 
            class="active:text-white active:border-[1] active:underline">Đăng xuất</RouterLink>
        </div>
      </div>
    </div>
    <div class="h-[100vh] w-full opacity-20 bg-[#3a7db9] blur-sm absolute mt-[220px] z-[2]" v-if="showNav"
      @click="showNav = false"></div>
  </div>
</template>

<style lang="scss" scoped>
.nav-drop-bg {
  opacity: 0;
  height: 0%;
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
  transform: translateY(0%);
  &.active {
    height: 150px;
    opacity: 0.8;
  }
}

.nav-drop {
  display: none;
  opacity: 0;
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
  transform: translateY(0%);
  height: 0;
  &.active {
    display: flex ;
    opacity: 1;
    height: 150px;
  }
}

.text_active {
  color: white;
  border: 1 solid;
  text-decoration: underline;
}


</style>

