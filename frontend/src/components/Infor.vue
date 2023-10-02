<template>
    <main class="flex flex-col gap-[20px] font-semibold italic text-[20px] px-[15px] w-full">
        <h1 class="flex justify-center font-semibold text-[35px] italic w-full">Thông Tin</h1>
        <h2>Nêm: <span class="text-[blue]">{{ props.user.name }}</span></h2>
        <h2 class="flex w-full justify-between items-center">
          <div>
            Vai trò:
            <span class="text-[blue]" v-if="showFixRole == false">{{ props.user.role }}</span>
            <Input :width="200" v-model="props.user.role" v-else/>
          </div>
          <RouterLink :to="{ path: '/auth/'+ id + '/present'}" class="text-[pink] text-[20px] underline" v-if="!props.admin">Xem báo đoàn</RouterLink>
          <span class="text-[35px] cursor-pointer hover:text-[green]" @click="()=>showFixRole = true" v-if="showFixRole != true & props.admin">Sửa</span>
          <span class="text-[35px] cursor-pointer hover:text-[green]" v-show="showFixRole == true" @click="()=>showFixRole = false">Ok</span>
        </h2>
        <h2 class="flex w-full justify-between items-center">
          <div>
            Trốn làm:
            <span class="text-[blue]" v-if="showFixOff == false">{{ props.user.offDay }}</span>
            <Input :width="200" v-model="props.user.offDay" v-else/>
          </div>
          <RouterLink :to="{ path: '/auth/'+ id + '/offDay'}" class="text-[pink] text-[20px] underline" v-if="!props.admin">Xem</RouterLink>
          <span class="text-[35px] cursor-pointer hover:text-[green]" @click="()=>showFixOff = true" v-if="showFixOff != true & props.admin">Sửa</span>
          <span class="text-[35px] cursor-pointer hover:text-[green]" v-show="showFixOff == true" @click="()=>showFixOff = false">Sửa</span>
        </h2>
        <h2>Note: <span class="text-[blue]" v-show="props.user.note == ''">Hong có gì (^-^)</span></h2>

        <p v-show="props.user.note != []" v-for="(text, index) in props.user.note" :key="index" class="flex justify-between">
          <span>- {{ text }}</span>
          <span class="text-[25px] cursor-pointer hover:text-[green]" @click="DeleteNote(index)" v-if="props.admin">Xoá</span>
        </p>
    </main>
</template>
<script setup>
import { defineProps, ref } from 'vue';
import Input from './Input.vue';

const props = defineProps({
  admin: Boolean,
  user: Object
})
const showFixRole = ref(false)
const showFixOff = ref(false)

const DeleteNote = index =>{
  props.user.note.splice(index,1)
}
</script>
<style lang="scss" scoped>
h2 {
  color: rgb(0, 0, 0);
}
p {
  padding-left: 10px;
  color: chocolate;
}
</style>