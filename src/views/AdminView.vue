<script setup>
import { ref } from 'vue';
import Menu from '../components/Menu.vue';
import Note from '../components/Note.vue';
import Off from '../components/Off.vue';
import Report from '../components/Report.vue';
import Check from '../components/Check.vue';

const id = ref('123')
const name = ref('')
const TAB = {
    NOTE : 0,
    OFF : 1,
    REPORT : 2,
    CHECK : 3,
    DETAIL : 4
}
const showTab = ref()
</script>
<template>
  <main>
    <Menu active="" :id="id" />
    <div class="w-full h-[100vh] pt-[70px]">
      <div
        class="backdrop-blur-sm bg-white/30 w-full h-full pt-[40px] px-[15px] flex flex-col gap-[20px] font-semibold italic text-[20px]"
      >
        <div class="flex gap-[20px] items-baseline">
          <h1>Tên</h1>
          <input
            v-model="name"
            class="rounded-[25px] ring-4 border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]"
            placeholder="Hãy nhập tên"
          />
          <button class="mt-[20px] rounded-[10px] border-2 border-black h-[50px] w-[50px] bg-[green] text-[20px] text-white">Tìm</button>
          <button class="mt-[20px] rounded-[10px] border-2 border-black h-[50px] w-[100px] bg-[violet] text-[20px] text-white" @click="()=>showTab=TAB.NOTE">+ Note</button>
          <button class="mt-[20px] rounded-[10px] border-2 border-black h-[50px] w-[100px] bg-[vio] text-[20px] text-white" @click="()=>showTab=TAB.OFF">+ Off</button>
          <button class="mt-[20px] rounded-[10px] border-2 border-black h-[50px] w-[100px] bg-[gray] text-[20px] text-white" @click="()=>showTab=TAB.REPORT">+ Report</button>
          <button class="mt-[20px] rounded-[10px] border-2 border-black h-[50px] w-[100px] bg-[pink] text-[20px] text-white" @click="()=>showTab=TAB.CHECK">Duyệt</button>
        </div>
        <div class="w-full h-full flex justify-center items-center">
            <Note v-show="showTab == TAB.NOTE" />
            <Off v-show="showTab == TAB.OFF" />
            <Report v-show="showTab == TAB.REPORT" />
            <Check v-show="showTab == TAB.CHECK" />
            <Detail v-show="showTab == TAB.DETAIL" />
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
