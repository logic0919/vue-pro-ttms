<script setup>
const props = defineProps({
  id: String,
  date: String,
  day: String,
  time: String,
  name: String,
  hall: String,
  seat: Array,
  price: Number,
  status: Number,
  img: String
})
console.log(props)
</script>

<template>
  <div class="myOrder">
    <div class="top">
      <div class="date">2023-12-02</div>
      <div class="id">猫眼订单号:24560713327</div>
    </div>
    <div class="main1">
      <div class="img"><img src="../assets/image/movie.png" alt="" /></div>
      <div class="detail">
        <div class="name">《热搜》</div>
        <div class="hall">5厅(激光厅)</div>
        <div class="seat">13排1座 13排2座</div>
      </div>
      <div class="price">￥68</div>
      <div class="status">已完成</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.myOrder {
  height: 240px;
  border: 1px solid rgb(231, 231, 231);
  box-shadow: 5px 6px 10px 4px rgb(222, 222, 222);
  margin-top: 30px;
  .top {
    background-color: rgb(212, 212, 212);
    height: 50px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .date {
      margin-right: 40px;
    }
    .id {
      color: rgb(226, 147, 147);
    }
  }
  .main1 {
    height: 190px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);
    .img {
      width: 20%;
      img {
        width: 110px;
        height: 150px;
      }
    }
    .detail {
      width: 30%;
      height: 80%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-start;
      .name {
        font-size: 23px;
      }
      .hall,
      .seat {
        font-size: 12px;
        color: rgb(133, 133, 133);
      }
    }
    .price {
      width: 20%;
    }
    .status {
      width: 27%;
    }
  }
}
</style>
