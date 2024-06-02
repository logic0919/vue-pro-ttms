<script setup>
import { movieGetCarouselsService } from '@/api/movie'
import { ref, onMounted } from 'vue'
const carouse = ref([])
const getCarouse = async () => {
  const res = await movieGetCarouselsService()
  if (res.status === 200) {
    carouse.value = res.data.data.item
  } else {
    ElMessage.error('获取轮播图失败')
  }
}
onMounted(() => {
  getCarouse()
})
</script>

<template>
  <div class="index">
    <topNav></topNav>
    <div class="carousels"></div>
  </div>
</template>

<style lang="scss" scoped></style>
