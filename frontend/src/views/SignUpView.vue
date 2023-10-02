<script setup>
import {ref} from 'vue'
import Menu from '../components/Menu.vue'
// import {checkExist} from '../../backend/api'
import { useRouter } from 'vue-router'
import Button from '../components/Button.vue';
const name = ref("")
const username = ref("")
const password = ref("")
const rePassword = ref("")
const message = ref("")
const router = useRouter()

const checkError = () =>{
  const regex = /^[a-z\d]+$/
  if (name.value == "")
    message.value = 'Vui lòng nhập tên thật'
  else if(username.value == '')
    message.value = 'Vui lòng nhập Username!!!'
  else if(username.value.length < 6 || username.value.length >10 )
    message.value = 'Độ dài Username phải từ 6 đến 10 kí tự'
  else if(!regex.test(username.value))
    message.value = 'Username phải có kí tự chữ, số và không có dấu, kí tự đặc biệt!!!'
  else if(password.value === '')
    message.value = 'Vui lòng nhập Password!!!'
  else if(password.value != rePassword.value)
    message.value = 'Hai mật khẩu không khớp!!!'
  else message.value = ''
}

const clearUser = () =>{
  name.value = ""
  username.value = ""
  password.value = ""
  rePassword.value = ""
  message.value = ""
}

const addNewUser = async () => {
  checkError()
  if(message.value === ''){
    let user_exits
    router.push('/sign-in')
    // await checkExist(username.value)
    //     .then(message => {
    //       user_exits = message.data
    //     })
    //     .catch(err =>
    //         console.log(err.response.data)
    //     );
    // message.value = user_exits ? 'Tài khoản này đã được đăng ký' : ''
    // if(!user_exits){
    //   await addNewAccount(username.value,password.value)
    //     .then(() => {
    //       clearUser()
    //       message.value = 'Đăng ký thành công'
    //       setTimeout(()=>{
    //         router.push('/sign-in');
    //         message.value = ''
    //       },1000)
    //     })
    //     .catch(err =>
    //         console.log(err.response.data)
    //     );
    // }
  }
}

</script>

<template>
  <main>
    <Menu active="SignUp "/>
    <div class="h-[100vh] w-full flex flex-col pt-[140px] items-center gap-[20px]">
        <span class="text-[35px] font-extrabold">Đăng Ký</span>
        <input v-model="name" class="mt-[20px] rounded-[25px] ring-4  border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]" placeholder="Tên thật để duyệt" >
        <input v-model="username" class=" rounded-[25px] ring-4  border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]" placeholder="Tài khoản" >
        <input v-model="password" class="rounded-[25px] ring-4  border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]" placeholder="Mật khẩu" >
        <input v-model="rePassword" class="rounded-[25px] ring-4  border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]" placeholder="Nhập lại mật khẩu" >
        <div class="text-[red] px-[20px] font-bold flex text-center bg-blur-sm text-[20px]">{{ message }}</div>
        <Button :text="'Đăng ký'" :rounded="50" :with="260" :background="'green'" @click="addNewUser" />
    </div>
  </main>
</template>