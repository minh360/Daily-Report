<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import { useRoute } from 'vue-router'
const listOffDay = ref([
    { date : '6/9', off: "1 ngày"},
    { date : '7/9', off: "nửa ngày"},
    { date : '8/9', off: "2 giờ"},
    { date : '9/9', off: "30 phút"}
])
const route = useRoute()
const id = ref(route.params.id)
</script>
<template>
    <main>
        <Menu active="" :id="id"/>
        <div class="w-full h-[100vh] pt-[70px]">
            <div
                class="backdrop-blur-sm bg-white/30 w-full h-full pt-[40px] px-[20px] flex flex-col gap-[20px] font-semibold italic text-[20px]">
                <h1 class="flex justify-center font-semibold text-[35px] italic w-full">Trốn làm</h1>
                <table class="table-auto">
          <thead>
            <tr>
              <th>Ngày</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="(row, index) in listOffDay" :key="index">
              <td>{{ row.date }}</td>
              <td>{{ row.off }}</td>
            </tr>
          </tbody>
        </table>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped></style>