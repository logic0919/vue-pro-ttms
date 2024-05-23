import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const id = ref('3000001')
  const email = ref('')
  const name = ref('Logic')
  const avatar = ref(
    'https://img2.baidu.com/it/u=4194115798,4169726391&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1716224400&t=f58a247e93cb573364ebf7bfe71303c0'
  )
  const money = ref('')
  const setToken = (usertoken) => {
    token.value = usertoken
  }
  const setId = (userid) => {
    id.value = userid
  }
  const setEmail = (useremail) => {
    email.value = useremail
  }
  const setName = (username) => {
    name.value = username
  }
  const setAvatar = (useravatar) => {
    avatar.value = useravatar
  }
  const setMoney = (usermoney) => {
    money.value = usermoney
  }
  return {
    token,
    setToken,
    id,
    setId,
    email,
    setEmail,
    name,
    setName,
    avatar,
    setAvatar,
    money,
    setMoney
  }
})
