<script setup>
// import { movieGetCarouselsService } from '@/api/movie'
import { orderSetService } from '@/api/order'
import { sessionGetOneService } from '@/api/session'
import { useUserStore } from '@/stores'
import { ref, onMounted, provide, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const session = ref('')
// const row=ref(0)
// const col = ref(0)
// const info = ref([])
// // 以下为场次基本信息，不需要做修改
// const type = ref('')
// const name = ref('')
// const theater = ref('')
// const hall=ref('')
// const time = ref('')
// const img=ref('')
// const duration = ref(0)
// const price = ref('')
const row = ref(10)
const col = ref(17)
// const info = ref([])
// 以下为场次基本信息，不需要做修改
const type = ref('喜剧,剧情')
const name = ref('末路狂花钱')
const theater = ref('')
const hall = ref('')
const time = ref('')
const img = ref(
  'https://p0.pipi.cn/mmdb/54ecde878d32ff0e139257d548b73a30ac9f9.jpg?imageView2/1/w/115/h/158'
)
const duration = ref(120)
const price = ref('12.5')
// 获取信息
onMounted(async () => {
  session.value = route.params.id
  const res = await sessionGetOneService(session.value)
  if (res.status === 200) {
    console.log(1)
  } else {
    ElMessage.error('场次信息获取失败')
  }
})
// 座位数组
const seatArr = ref([
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [2, 1, 2, 1, 2, 1, 0, 1, 1, 2, 1],
  [1, 2, 1, 2, 1, 1, 0, 1, 1, 1, 2],
  [1, 2, 1, 2, 0, 1, 2, 1, 1, 1, 2],
  [1, 2, 1, 2, 0, 1, 2, 1, 1, 1, 2],
  [1, 2, 1, 2, 0, 1, 3, 3, 1, 1, 2],
  [1, 2, 1, 2, 0, 1, 2, 1, 1, 1, 2],
  [1, 2, 1, 2, 1, 0, 1, 1, 1, 2, 2]
])
// 生成选中的座位的二维数组的函数
const getCheckedSeat = (matrix) => {
  let indices = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 3) {
        indices.push([i, j])
      }
    }
  }
  return indices
}
const checkedSeat = computed(() => {
  return getCheckedSeat(seatArr.value)
})
// 总价
const total = computed(() => {
  return checkedSeat.value.length * price.value
})
provide('changeStatus', (obj) => {
  seatArr.value[obj.row - 1][obj.col - 1] = obj.status
})
// 根据数组checkedSeat生成选中的座位的字符串checkedSeatArr
// 转换的函数
const getCheckedSeatStr = () => {
  let flattenedArray = checkedSeat.value.flat()
  return flattenedArray.join(',')
}
// 购票
const buy = async () => {
  const res = await orderSetService({
    user_id: userStore.id,
    // movie_id: obj.movie,
    session_id: session,
    seat_id: getCheckedSeatStr(),
    num: checkedSeat.value.length
    // type: obj.type
  })
  if (res.status === 200) {
    // 获取到订单id，并跳转页面
    ElMessage.success('订单创建成功')
    router.push({
      path: '/orderShow',
      query: {
        orderId: res.data.data.id
      }
    })
  } else {
    ElMessage.error('订单创建失败')
  }
}
</script>

<template>
  <div class="order">
    <div class="seatArea">
      <div class="yinmu">银幕中心</div>
      <seat-table :row="row" :col="col" :seatDefault="seatArr"></seat-table>
    </div>
    <div class="info">
      <div class="info1">
        <img :src="img" alt="" />
        <div class="info3">
          <h5>{{ name }}</h5>
          <h6>类型：{{ type }}</h6>
          <h6>时长：{{ duration }}</h6>
        </div>
      </div>
      <div class="info2">
        <h6>影院：{{ theater }}</h6>
        <h6>影厅：{{ hall }}</h6>
        <h6>场次：{{ time }}</h6>
        <h6>票价：{{ price }}</h6>
      </div>
      <div class="checked">
        <div class="seat">
          <h6>座位：</h6>
          <div class="tags">
            <el-check-tag
              class="tag"
              checked="true"
              type="danger"
              v-for="i in checkedSeat"
              :key="i"
              >{{ i[0] }}行{{ i[1] }}列</el-check-tag
            >
          </div>
        </div>
        <h3 class="totalPrice" v-if="checkedSeat.length !== 0">
          总价：{{ total }}
        </h3>
        <button class="btn" @click="buy" v-if="checkedSeat.length !== 0">
          确认购票
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.order {
  width: 70%;
  min-width: 700px;
  max-width: 1000px;
  height: 670px;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  margin: 40px auto;
  .seatArea {
    width: 60%;
    border: 1px solid red;
    position: relative;
    .yinmu {
      width: 120px;
      height: 40px;
      line-height: 40px;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -40px;
      background-color: rgb(124, 124, 124);
      color: white;
      text-align: center;
    }
  }
  .info {
    width: 40%;
    border: 1px solid red;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(242, 242, 242);
    .info1,
    .info2 {
      border-bottom: 1px dashed red;
    }
    .info1 {
      display: flex;
      justify-content: flex-start;
      padding-bottom: 10px;
      height: 30%;
      img {
        margin-right: 20px;
        border: 2px solid white;
      }
      .info3 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    .info2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 22%;
    }
    .checked {
      height: 45%;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .seat {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        h3 {
          width: 20%;
        }
        .tags {
          width: 80%;
          .tag {
            width: 60px;
            height: 30px;
            font-size: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            text-align: center;
            line-height: 30px;
          }
        }
      }
      .totalPrice {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .btn {
        width: 70%;
        margin: 0 auto;
        height: 40px;
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
