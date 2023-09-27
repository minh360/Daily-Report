<script setup>
import { ref } from 'vue';
import Menu from '../components/Menu.vue';
import Note from '../components/Note.vue';
import Off from '../components/Off.vue';
import Report from '../components/Report.vue';
import Check from '../components/Check.vue';
import Button from '../components/Button.vue';

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
          <Button :text="'Tìm'" :rounded="10" :with="50" :background="'green'"/>
          <Button :text="'+ Note'" :rounded="10" :background="'violet'" :with="100" @click="()=>showTab=TAB.NOTE" />
          <Button :text="'+ Off'" :rounded="10" :background="''" :with="100" @click="()=>showTab=TAB.OFF" />
          <Button :text="'+ Report'" :rounded="10" :background="'gray'" :with="100" @click="()=>showTab=TAB.REPORT" />
          <Button :text="'Duyệt'" :rounded="10" :background="'pink'" :with="100" @click="()=>showTab=TAB.CHECK" />
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
