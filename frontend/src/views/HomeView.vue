<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import Infor from '../components/Infor.vue';

const user = ref({
  id: '12121212',
  name: 'Liên',
  role: 'T Trình',
  offDay: '1d 2h 3m',
  note: ['Quá ghê gớm','Đỉnh vippro'],
  status: true
})
</script>

<template>
  <main>
    <Menu active="" />
    <div class="w-full h-[100vh] pt-[70px]" v-show="true">
      <div
        class="uppercase w-full h-[calc(100vh-70px)] flex text-[35px] font-semibold px-[50px] justify-center text-center items-center backdrop-blur-sm bg-white/30 absolute z-[1]"
        v-if="!user.status"
      >
        Waitting...
      </div>
      <div
        class="backdrop-blur-sm bg-white/30 h-full pt-[40px]"
      >
        <Infor :user="user" :admin="false"/>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>

</style>
