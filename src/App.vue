<script setup>
import { useUserStore } from '@/stores/index'
const userStore = useUserStore()
const { setAll, getlocalAll, setlocalTime, getlocalTime, clearAll } = userStore
const autoLogin = () => {
  const nowtime = new Date().getTime() + ''
  const expiretime = getlocalTime()
  // 有本地缓存的情况
  if (expiretime) {
    // 过期情况，删token，其他信息，时间戳
    if (nowtime < expiretime) {
      clearAll()
      console.log('过期')
    } else {
      // 没有过期情况：更新时间戳，从本地取数据放到仓库中
      setlocalTime()
      setAll(getlocalAll())
      console.log('登录缓存成功')
    }
  }
}
autoLogin()
</script>

<template>
  <topNav></topNav>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
