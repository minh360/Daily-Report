<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import { useRoute } from 'vue-router'
const messages = ref([
    { name: "Trúc", date: "23/9", message: '10 xe' },
    { name: "Liên", date: "23/9", message: '8 xe' },
    { name: "Liên", date: "23/9", message: '565 xe' }
].reverse())
const answer = ref('')
const user = ref('Liên')
const them = () => {
    messages.value.push({ name: "Liên", date: "23/9", message: answer })
    answer.value = ''
}
const route = useRoute()
const id = ref(route.params.id)
</script>
<template>
    <main>
        <Menu active="Guess" :id="id"/>
        <div class="w-full h-[100vh] pt-[70px]">
            <div
                class="backdrop-blur-sm bg-white/30 w-full h-full pt-[20px] px-[10px] flex flex-col gap-[30px] font-semibold italic text-[20px]">
                <div>
                    <h1 class="flex justify-center font-semibold text-[35px] italic w-full">Đoán vui</h1>
                    <h2 class="flex justify-center font-semibold text-[18px] italic w-full">( Từ 1/9 đến 10/9 bao nhiêu xe )
                    </h2>
                </div>

                <div class="container">
                    <div class="chat-container">
                        <div class="message" v-for="(item, index) in messages">
                            <div class="flex justify-between items-center" :class="{ reverse: item.name == user }">
                                <div class="mr-[5px] text-[darkviolet]" :class="{ name: item.name == user }">{{ item.name }}</div>
                                <p>&nbsp;</p>
                            </div>

                            <div class="flex justify-between items-center" :class="{ reverse: item.name == user }">
                                <p class="w-[80%] break-all" :class="{ mes: item.name == user }">{{ item.message }}</p>
                                <div class="text-[crimson]">{{ item.date }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-[20px] justify-between relative">
                    <p class="absolute -mt-[18px]">Chat dưới 20 kí tự nha ('-')</p>
                    <input v-model="answer"
                        class="mt-[20px] max-w-[250px] rounded-[25px] ring-4 border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]"
                        placeholder="Câu trả lời">
                    <button
                        class="mt-[20px] rounded-[20px] border-2 border-black h-[50px] w-[80px] bg-[green] text-[20px] text-white"
                        @click="them">Gửi</button>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.container {
    width: auto 400px;
    margin: 0 auto;
    border: solid 1px black;
    border-radius: 5px;
    overflow: hidden;
}

.chat-container {
    height: 50vh;
    overflow: auto;
    transform: rotate(180deg);
    direction: ltr;

    .message {
        margin: 10px 20px 10px 20px;
        transform: rotate(180deg);
        direction: ltr;
        border-top: 1px solid red;

        .reverse {
            flex-direction: row-reverse;

            .name {
                color: darkblue
            }

            .mes {
                display: flex;
                justify-content: flex-end;
            }
        }
    }
}</style>