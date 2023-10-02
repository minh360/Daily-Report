<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import { useRoute } from 'vue-router'
import OffDay from '../components/OffDay.vue';
const listOffDay = ref([
  { date: '6/9', off: "1 ngày" },
  { date: '7/9', off: "nửa ngày" },
  { date: '8/9', off: "2 giờ" },
  { date: '9/9', off: "30 phút" }
])
const route = useRoute()
const id = ref(route.params.id)
</script>
<template>
  <main>
    <Menu active="" :id="id" />
    <div class="w-full h-[100vh] pt-[70px]">
      <div
        class="backdrop-blur-sm bg-white/30 w-full h-full pt-[40px] px-[20px]">
        <OffDay :list-off-day="listOffDay" />
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>