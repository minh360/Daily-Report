<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
const protect = ref(true)
const texts = ref(['Hướng dẫn bảo khuyên nên nói giọng lên xuống chứ không giữ 1 tông !!!', 'Hết'])
const id = ref()
</script>

<template>
  <main>
    <Menu active="" :id="id" />
    <div class="w-full h-[100vh] pt-[70px]" v-show="true">
      <div
        class="uppercase w-full h-[calc(100vh-70px)] flex text-[35px] font-semibold px-[50px] justify-center text-center items-center backdrop-blur-sm bg-white/30 absolute z-[1]"
        v-if="!protect"
      >
        Waitting...
      </div>
      <div
        class="backdrop-blur-sm bg-white/30 w-full h-full pt-[40px] px-[15px] flex flex-col gap-[20px] font-semibold italic text-[20px]"
      >
        <h1 class="flex justify-center font-semibold text-[35px] italic w-full">Thông Tin</h1>
        <h2>Nêm: <span class="text-[blue]">Liên</span></h2>
        <h2 class="flex w-full justify-between items-center">
          Vai trò:
          <span class="text-[blue]">TTrình</span>
          <RouterLink :to="{ path: '/auth/'+ id + '/present'}" class="text-[pink] text-[20px] underline" >Xem báo đoàn</RouterLink>
        </h2>
        <h2 class="flex w-full justify-between items-center">
          Trốn làm:
          <span class="text-[blue]">2d 3h 40p </span>
          <RouterLink :to="{ path: '/auth/'+ id + '/offDay'}" class="text-[pink] text-[20px] underline" >Xem</RouterLink>
        </h2>
        <h2>Note: <span class="text-[blue]" v-show="texts == ''">Hong có gì (^-^)</span></h2>

        <p v-show="texts != []" v-for="(text, index) in texts" :key="index">
          {{ text }}
        </p>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
h2 {
  color: rgb(0, 0, 0);
}
p {
  padding-left: 10px;
  color: chocolate;
  &::before {
    content: '- ';
  }
}
</style>
