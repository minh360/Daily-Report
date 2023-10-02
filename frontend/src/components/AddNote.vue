<script setup>
import { ref} from 'vue';
import Input from './Input.vue';

const name = ref('')
const note = ref('')
</script>
<template>
    <main>
        <div class="border-2 border-black rounded-[] w-[500px] h-[450px] flex flex-col bg-[white] gap-[50px] pt-[30px] ">
            <div class="relative w-full flex justify-center items-center">
                <h1 class="text-[45px]">Note</h1>
                <button class="border-2 rounded-[20px] border-black px-[20px] py-[10px] absolute right-10 bg-[gray] hover:bg-[violet]">+</button>
            </div>
            <div class="w-full flex flex-col items-center gap-[30px]">
                <Input :placeholder="'Tên'" v-model:model-value="name" :width="400"/>
                <Input :placeholder="'Note'" v-model:model-value="note" :width="400"/>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
</style>