<script setup>
import { computed, ref } from 'vue'

const list = ref([
    {
        id: '00000',
        name: 'Tiên',
        status: false
    },
    {
        id: '00000',
        name: 'Xuân',
        status: false
    },
    {
        id: '00000',
        name: 'Hiếu',
        status: false
    },
    {
        id: '00000',
        name: 'Hiếu',
        status: false
    },
    {
        id: '00000',
        name: 'Hiếu',
        status: false
    },
    {
        id: '00000',
        name: 'Hiếu',
        status: false
    },
    {
        id: '00000',
        name: 'Hiếu',
        status: false
    },
    {
        id: '00000',
        name: 'Hiếu',
        status: false
    },
    {
        id: '00000',
        name: 'Hiếu',
        status: false
    }
])
const CheckAccount = index => {
    list.value.splice(index, 1)
}
const showList = computed(()=>{
    return list.value.length != 0
})
</script>
<template>
    <main>
        <div class="border-2 border-black w-[500px] h-[450px] flex flex-col bg-white gap-20px overflow-y-auto" v-if="showList">
            <div v-for="(item, index) in list" :key="item.id" class="list pl-[20px] pr-[30px] flex justify-between items-center">
                <div class="text-[15px]">Tên: <span class="text-[red] text-[23px]">{{ item.name }}</span></div>
                <img src="@/assets/check.png" class="h-[70px] w-[90px] cursor-pointer"
                    @click="CheckAccount(index, item.id)" />
            </div>
        </div>
        <div v-else>
            Nobody . . .
        </div>
    </main>
</template>
<style lang="scss" scoped>
.list {
    border-bottom: dashed 1px gray;
}
</style>