<script setup>
import {ref,defineProps} from 'vue'
import Infor from './Infor.vue';
import OffDay from './OffDay.vue';

const TAB = {
    DETAIL : 0,
    OFFDAY : 1,
    REPORT : 2
}
const props = defineProps({
    user: Object,
    listOff: Array
})
const showTab = ref(TAB.DETAIL)
const showDetail = ref(true)
</script>
<template>
    <main>
        <div v-if="showDetail">
            <div class="flex border-2 border-[gray] w-[900px] h-[500px] relative">
                <div class="w-full underline h-[50px] flex bg-white absolute">
                    <div :class="{active: showTab == TAB.DETAIL}" class="h-[50px] tab cursor-pointer" @click="()=> showTab = TAB.DETAIL">Detail</div>
                    <div :class="{active: showTab == TAB.OFFDAY}" class="h-[50px] tab cursor-pointer" @click="()=> showTab = TAB.OFFDAY">Off Day</div>
                    <div :class="{active: showTab == TAB.REPORT}" class="h-[50px] tab cursor-pointer" @click="()=> showTab = TAB.REPORT">Report</div>
                </div>
                <Infor :user="props.user" :admin="true" v-if="showTab == TAB.DETAIL"/>
                <OffDay :list-off-day="props.listOff" v-if="showTab == TAB.OFFDAY"/>
            </div>
        </div>
        
    </main>
</template>
<style lang="scss" scoped>
.active{
    background-color: gray;
}
.tab{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}
</style>