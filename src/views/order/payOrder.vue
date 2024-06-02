<script setup>
import { useRoute } from 'vue-router'
import { orderGetService } from '@/api/order'
import { ref, onMounted } from 'vue'
const route = useRoute()
const orderId = route.query.orderId
// const countdown = ref('')
const info = ref({})
onMounted(() => {
  const res = orderGetService(orderId)
  if (res.status === 200) {
    info.value = res.data.info
  } else {
    ElMessage.error('订单信息获取失败')
  }
})
const min = ref(0)
const second = ref(0)
const pay = () => {}
</script>

<template>
  <div class="orderShow">
    <div class="countdown">请在{{ min }}分{{ second }}秒内支付订单</div>
    <div class="show">
      <div class="nav">
        <div class="nav-item">影片</div>
        <div class="nav-item">时间</div>
        <div class="nav-item">影院</div>
        <div class="nav-item">座位</div>
        <div class="nav-item">操作</div>
      </div>
      <div class="info">
        <div class="info-item">{{ info.movie }}</div>
        <div class="info-item">{{ info.time }}</div>
        <div class="info-item">{{ info.theater }}</div>
        <div class="info-item">{{ info.seat }}</div>
        <button class="info-item btn" @click="pay">支付订单</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderShow {
  width: 80%;
  margin: 0 auto;
  min-width: 700px;
  .countdown {
    height: 80px;
    background-color: antiquewhite;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .show {
    height: 200px;
    .nav,
    .info {
      height: 100px;
      display: flex;
      justify-content: space-between;
      background-color: rgb(170, 170, 170);
      .nav-item,
      .info-item {
        width: 20%;
        text-align: center;
        line-height: 100px;
      }
    }
    .info {
      background-color: aliceblue;
      .btn {
        width: 100px;
        margin: 0 auto;
        height: 40px;
        margin-top: 30px;
        line-height: 40px;
        border-radius: 20px;
        border-color: transparent;
        background-color: red;
        color: white;
      }
    }
  }
}
</style>
