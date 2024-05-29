import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // 5个数据
  const token = ref('11')
  const id = ref('3000001')
  const email = ref('testEmail')
  const name = ref('Logic')
  const avatar = ref(
    'https://img2.baidu.com/it/u=4194115798,4169726391&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1716224400&t=f58a247e93cb573364ebf7bfe71303c0'
  )
  // 5个set函数
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
  // 全部set函数
  const setAll = (obj) => {
    setToken(obj.token)
    setId(obj.id)
    setEmail(obj.email)
    setName(obj.nick_name)
    setAvatar(obj.avatar)
  }
  // 6个getlocal函数以及一个整体给getlocal函数
  const getlocalToken = () => {
    return localStorage.getItem('ttms_token')
  }
  const getlocalId = () => {
    return localStorage.getItem('ttms_id')
  }
  const getlocalEmail = () => {
    return localStorage.getItem('ttms_email')
  }
  const getlocalName = () => {
    return localStorage.getItem('ttms_name')
  }
  const getlocalAvatar = () => {
    return localStorage.getItem('ttms_avatar')
  }
  const getlocalTime = () => {
    return localStorage.getItem('ttms_time')
  }
  const getlocalAll = () => {
    return {
      token: getlocalToken(),
      id: getlocalId(),
      email: getlocalEmail(),
      name: getlocalName(),
      avatar: getlocalAvatar()
    }
  }
  // 6个setlocal函数以及一个整体setlocal函数
  const setlocalToken = (usertoken) => {
    localStorage.setItem('ttms_token', usertoken)
  }
  const setlocalId = (userid) => {
    localStorage.setItem('ttms_id', userid)
  }
  const setlocalEmail = (useremail) => {
    localStorage.setItem('ttms_email', useremail)
  }
  const setlocalName = (username) => {
    localStorage.setItem('ttms_name', username)
  }
  const setlocalAvatar = (useravatar) => {
    localStorage.setItem('ttms_avatar', useravatar)
  }
  const setlocalTime = () => {
    const time = new Date().getTime()
    localStorage.setItem('ttms_time', time)
  }
  const setlocalAll = (obj) => {
    setlocalToken(obj.token)
    setlocalId(obj.id)
    setlocalEmail(obj.email)
    setlocalName(obj.nick_name)
    setlocalAvatar(obj.avatar)
  }
  // 1个清除local函数
  const clearAll = () => {
    localStorage.clear('ttms_token')
    localStorage.clear('ttms_id')
    localStorage.clear('ttms_email')
    localStorage.clear('ttms_name')
    localStorage.clear('ttms_avatar')
    localStorage.clear('ttms_time')
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
    setAll,
    getlocalToken,
    getlocalId,
    getlocalEmail,
    getlocalName,
    getlocalAvatar,
    getlocalTime,
    setlocalToken,
    setlocalId,
    setlocalEmail,
    setlocalName,
    setlocalAvatar,
    setlocalTime,
    getlocalAll,
    setlocalAll,
    clearAll
  }
})
