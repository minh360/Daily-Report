<script setup>
import { ref } from 'vue';
import Menu from '../components/Menu.vue';
import AddNote from '../components/AddNote.vue';
import AddOff from '../components/AddOff.vue';
import AddReport from '../components/AddReport.vue';
import Check from '../components/Check.vue';
import Button from '../components/Button.vue';
import Detail from '../components/Detail.vue'

const id = ref('123')
const name = ref('')
const TAB = {
    NOTE : 0,
    OFF : 1,
    REPORT : 2,
    CHECK : 3,
    DETAIL : 4,
    WELCOM : 5
}
const user = ref({
  id: '12121212',
  name: 'Liên',
  role: 'T Trình',
  offDay: '1d 2h 3m',
  note: ['Quá ghê gớm','Đỉnh vippro'],
  status: true
})
const listOff = ref([
  { date: '6/9', off: "1 ngày" },
  { date: '7/9', off: "nửa ngày" },
  { date: '8/9', off: "2 giờ" },
  { date: '9/9', off: "30 phút" }
])
const showTab = ref(TAB.WELCOM)
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
          <Button :text="'Tìm'" :rounded="10" :with="50" :background="'green'" @click="()=>showTab=TAB.DETAIL" />
          <Button :text="'+ Note'" :rounded="10" :background="'violet'" :with="100" @click="()=>showTab=TAB.NOTE" />
          <Button :text="'+ Off'" :rounded="10" :background="''" :with="100" @click="()=>showTab=TAB.OFF" />
          <Button :text="'+ Report'" :rounded="10" :background="'gray'" :with="100" @click="()=>showTab=TAB.REPORT" />
          <Button :text="'Duyệt'" :rounded="10" :background="'pink'" :with="100" @click="()=>showTab=TAB.CHECK" />
        </div>
        <div class="w-full h-full flex justify-center items-center">
            <AddNote v-show="showTab == TAB.NOTE" />
            <AddOff v-show="showTab == TAB.OFF" />
            <AddReport v-show="showTab == TAB.REPORT" />
            <AddCheck v-show="showTab == TAB.CHECK" />
            <Detail v-show="showTab == TAB.DETAIL" :user="user" :list-off="listOff"/>
            <div v-show="showTab == TAB.WELCOM">
              Welcom to ADMIN CLIENT
            </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
