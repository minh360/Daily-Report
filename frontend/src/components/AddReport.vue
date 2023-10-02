<script setup>
import { ref} from 'vue';
import Input from './Input.vue';

const name = ref('')
const date = ref('')
const card = ref('')
const person = ref('')
const totalBill = ref('')
</script>
<template>
    <main>
        <div class="border-2 border-black w-[500px] h-[500px] flex flex-col bg-[white] gap-[30px] pt-[20px] ">
            <div class="relative w-full flex justify-center items-center">
                <h1 class="text-[45px]">Report</h1>
                <button class="border-2 rounded-[20px] border-black px-[20px] py-[10px] absolute right-10 bg-[gray] hover:bg-[red]">+</button>
            </div>
            <div class="w-full flex flex-col items-center gap-[30px]">
                <Input :placeholder="'Tên'" v-model:model-value="name" :width="400"/>
                <Input :placeholder="'Ngày'" v-model:model-value="date" :width="400"/>
                <Input :placeholder="'Thẻ'" v-model:model-value="card" :width="400"/>
                <Input :placeholder="'Người'" v-model:model-value="person" :width="400"/>
                <Input :placeholder="'Tổng bill'" v-model:model-value="totalBill" :width="400"/>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
</style>