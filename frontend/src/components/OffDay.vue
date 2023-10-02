<template>
  <main class=" flex flex-col gap-[20px] font-semibold italic text-[20px] pt-[60px] w-full">
    <h1 class="flex justify-center font-semibold text-[35px] italic w-full">Trốn làm</h1>
    <table class="table-auto">
      <thead>
        <tr>
          <th>Ngày</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(row, index) in props.listOffDay" :key="index" class="relative">
          <td>{{ row.date }}</td>
          <td>{{ row.date }}</td>
          <td>{{ row.off }}</td>
          <span class="absolute right-20 text-[25px] cursor-pointer hover:text-[green]">Sửa</span>
          <span class="absolute right-5 text-[25px] cursor-pointer hover:text-[green]">Xoá</span>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
  listOffDay: Array
})
const showDate = ref(false)
const show
</script>
<style lang="scss" scoped></style>