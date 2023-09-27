<template>
  <main>
    <Menu active="SignIn" />
    <div class="h-[calc(100vh-70px)] w-full flex flex-col pt-[140px] items-center gap-[20px]">
      <span class="text-[35px] font-extrabold">Đăng Nhập</span>
      <input v-model="account"
        class="mt-[20px] rounded-[25px] ring-4 border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]"
        placeholder="Tài khoản">
      <input v-model="password"
        class="rounded-[25px] ring-4 border-2 focus:outline-0 focus:ring focus:ring-pink-500 ring-offset-2 h-[30px] px-[10px] py-[20px]"
        placeholder="Mật khẩu">
      <button class="mt-[20px] rounded-[50px] border-2 border-black h-[50px] w-[260px] bg-[green] text-[20px] text-white"
        @click="signInClient">Đăng nhập</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Menu from '../components/Menu.vue'
const account = ref('')
const password = ref('')
const message = ref('')
const router = useRouter()
const checkError = () => {
  if (account.value === '')
    message.value = 'Vui lòng nhập Username!!!'
  else if (password.value === '')
    message.value = 'Vui lòng nhập Password!!!'
  else message.value = ''
}
const clearUser = () => {
  account.value = ''
  password.value = ''
}
const signInClient = async () => {
  let idUser
  checkError()
  if (message.value === '') {
    await checkExist(account.value,password.value)
      .then(user => {
        message.value = !user ? 'Đăng nhập thất bại' : ''
        idUser = user.data._id
        message.value = user ? 'Đăng nhập thành công' : 'Đăng nhập thất bại!!! Vui lòng thử lại'
        if (user.password == password.value) {
          sessionStorage.setItem('id_user', idUser)
          setTimeout(() => {
            router.push({ name: 'home' })
            message.value = ''
          }, 1000)
        }
        clearUser()
      })
  }
}

</script>