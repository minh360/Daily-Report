<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import { useRoute } from 'vue-router'
const listBill = ref([
  { date: '6/9', card: '61', amount: 23, totalBill: 19999 }, 
  { date: '6/9', card: 'TC', amount: 23, totalBill: 19999 }, 
  { date: '7/9', card: '61', amount: 23, totalBill: 19999 },
  { date: '7/9', card: '61+9', amount: 23, totalBill: 50902 },
  { date: '7/9', card: '61', amount: 23, totalBill: "" },
  { date: '8/9', card: '61', amount: 23, totalBill: 19999 },
  { date: '8/9', card: '61', amount: 23, totalBill: 19999 }
].sort(function(a, b){return a - b}))
const format = value =>{
  return new Intl.NumberFormat('en-DE').format(value)
}
const route = useRoute()
const id = ref(route.params.id)
</script>
<template>
  <main>
    <Menu active="" :id="id"/>
    <div class="w-full h-[100vh] pt-[70px]">
      <div
        class="backdrop-blur-sm bg-white/30 w-full h-full pt-[40px] px-[20px] flex flex-col gap-[20px] font-semibold italic text-[20px]">
        <div>
          <h1 class="flex justify-center font-semibold text-[35px] italic w-full">Báo Đoàn</h1>
          <h2 class="flex justify-center font-semibold text-[18px] italic w-full">( 1/9 - 10/9 )</h2>
          <p class="flex justify-between text-[red] mt-[20px] gap-[20px]">
            <h2>TNgười 405</h2>
            <h2>TMua {{ format(1002323) }}</h2>
            <h2>Tỉ lệ {{ format(202.2424) }}</h2>
          </p>
        </div>

        <table class="table-auto">
          <thead>
            <tr class="text-[tomato] text-[23px]">
              <th>Ngày</th>
              <th>Thẻ</th>
              <th>Người</th>
              <th>Tổng mua</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="(row, index) in listBill" :key="index">
              <td>{{ (listBill[index-1] ? listBill[(index-1)].date== row.date : false)  ? " " : row.date }}</td>
              <td>{{ row.card }}</td>
              <td>{{ row.amount }}</td>
              <td>{{ row.totalBill ? format(row.totalBill) : "từ từ thôi..."}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
  color: t
}
</style>