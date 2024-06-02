<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { movieGetHottheaterService } from '../../api/movie'
import { sessionGetListService, sessionDelService } from '../../api/session'
import { getDate, formatDate, formatTime1 } from '../../utils/data'
const route = useRoute()
const router = useRouter()
const theater_id = route.params.theater_id
const movie_list = ref([])
movie_list.value = [
  { id: 0, name: '全部' },
  { id: 1, name: '电影1' },
  { id: 2, name: '电影2' },
  { id: 3, name: '电影3' },
  { id: 4, name: '电影4' },
  { id: 5, name: '电影5' },
  { id: 6, name: '电影6' },
  { id: 7, name: '电影7' }
]
onMounted(async () => {
  const res = await movieGetHottheaterService(theater_id)
  if (res.data.status === 200) {
    movie_list.value = res.data.data
    movie_list.value.unshift({ id: 0, name: '全部' })
  } else {
    ElMessage({ message: '影片获取失败', type: 'error' })
  }
})
const radio1 = ref(0)
const dateData = getDate()
const radio2 = ref(dateData[0].dateid)
const addSession = () => {
  router.push(`/admin/addSession/${theater_id}`)
}
// 要渲染的场次信息列表
const session_list = ref([])
// 监听选项是否发生变化
watch(
  () => {
    return {
      movie: radio1.value,
      date: radio2.value
    }
  },
  async (newValue) => {
    console.log(theater_id, newValue.movie, formatDate(newValue.date))
    const res = await sessionGetListService({
      theater_id,
      movie_id: newValue.movie,
      date: formatDate(newValue.date)
    })
    if (res.data.status === 200) {
      session_list.value = res.data.data.item
    } else {
      ElMessage({ message: '影片获取失败', type: 'error' })
    }
  },
  {
    immediate: true,
    deep: true
  }
)
const total = computed(() => {
  return session_list.value.length
})
// 模拟数据
session_list.value = [
  {
    ID: 1,
    Movie: {
      ID: 1,
      CreatedAt: '2024-05-31T01:46:00+08:00',
      UpdatedAt: '2024-05-31T01:46:00+08:00',
      DeletedAt: null,
      ChineseName: '战狼',
      EnglishName: 'chinese_wolf',
      CategoryId: '1,2,3',
      Area: '中国',
      Duration: 7200000000000,
      ShowTime: '2024-05-10T16:00:00+08:00',
      Introduction: '爱国 超级爱国',
      ImgPath: '战狼/战狼index.jpg',
      OnSale: true,
      Score: 0,
      sales: 0,
      Directors: null,
      Actors: null
    },
    TheaterID: 1,
    Hall: {
      ID: 1,
      CreatedAt: '2024-05-31T22:32:06+08:00',
      UpdatedAt: '2024-05-31T22:32:06+08:00',
      DeletedAt: null,
      Name: '启程',
      TheaterID: 1,
      Theater: {
        ID: 0,
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null
      },
      SeatRow: 4,
      SeatColumn: 5,
      Seat: '1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1',
      SeatNum: 16,
      Mu: {}
    },
    ShowTime: '2024-05-30T18:00:00+08:00',
    EndTime: '2024-05-30T20:00:00+08:00',
    SurplusTicket: 16,
    SeatStatus: '1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1',
    Price: 39.5,
    SeatRow: 4
  },
  {
    ID: 2,
    Movie: {
      ID: 1,
      CreatedAt: '2024-05-31T01:46:00+08:00',
      UpdatedAt: '2024-05-31T01:46:00+08:00',
      DeletedAt: null,
      ChineseName: '战狼',
      EnglishName: 'chinese_wolf',
      CategoryId: '1,2,3',
      Area: '中国',
      Duration: 7200000000000,
      ShowTime: '2024-05-10T16:00:00+08:00',
      Introduction: '爱国 超级爱国',
      ImgPath: '战狼/战狼index.jpg',
      OnSale: true,
      Score: 0,
      sales: 0,
      Directors: null,
      Actors: null
    },
    TheaterID: 1,
    Hall: {
      ID: 3,
      CreatedAt: '2024-05-31T22:34:48+08:00',
      UpdatedAt: '2024-05-31T22:34:48+08:00',
      DeletedAt: null,
      Name: '星河纪元',
      TheaterID: 1,
      Theater: {
        ID: 0,
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null
      },
      SeatRow: 4,
      SeatColumn: 5,
      Seat: '1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1',
      SeatNum: 16,
      Mu: {}
    },
    ShowTime: '2024-05-30T18:00:00+08:00',
    EndTime: '2024-05-30T20:00:00+08:00',
    SurplusTicket: 16,
    SeatStatus: '1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1',
    Price: 39.5,
    SeatRow: 4
  },
  {
    ID: 3,
    Movie: {
      ID: 2,
      CreatedAt: '2024-05-31T01:46:17+08:00',
      UpdatedAt: '2024-05-31T01:46:17+08:00',
      DeletedAt: null,
      ChineseName: '战狼 22222',
      EnglishName: 'chinese_wolf',
      CategoryId: '1,2,3',
      Area: '中国',
      Duration: 7200000000000,
      ShowTime: '2024-05-10T16:00:00+08:00',
      Introduction: '爱国 超级爱国',
      ImgPath: '战狼 22222/战狼 22222index.jpg',
      OnSale: true,
      Score: 0,
      sales: 3,
      Directors: null,
      Actors: null
    },
    TheaterID: 1,
    Hall: {
      ID: 3,
      CreatedAt: '2024-05-31T22:34:48+08:00',
      UpdatedAt: '2024-05-31T22:34:48+08:00',
      DeletedAt: null,
      Name: '星河纪元',
      TheaterID: 1,
      Theater: {
        ID: 0,
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null
      },
      SeatRow: 4,
      SeatColumn: 5,
      Seat: '1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1',
      SeatNum: 16,
      Mu: {}
    },
    ShowTime: '2024-06-01T12:48:26+08:00',
    EndTime: '2024-06-01T14:48:26+08:00',
    SurplusTicket: 16,
    SeatStatus: '1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1',
    Price: 38.9,
    SeatRow: 4
  }
]
const color = (i) => {
  if (i % 2 == 0) {
    return 'background-color: #e7e7e7;'
  } else {
    return 'background-color: #d6d6d6'
  }
}
// 删除场次
const delSession = async (id) => {
  ElMessageBox.confirm('确定删除场次？', '提示')
    .then(async () => {
      const res = await sessionDelService(id)
      if (res.data.status === 200) {
        ElMessage({ message: '场次删除成功', type: 'success' })
        session_list.value = session_list.value.filter((item) => {
          return item.ID != id
        })
      } else {
        ElMessage({ message: '场次删除失败', type: 'error' })
      }
    })
    .catch(() => {})
}
// 跳转至信息展示页面
const gotoInfo = (id) => {
  router.push(`/admin/viewSession/${theater_id}/${id}`)
}
</script>

<template>
  <div class="showSession">
    <div class="chooseBox">
      <div class="movieChoose">
        <div class="text">影片：</div>
        <el-radio-group class="radios" v-model="radio1">
          <el-radio
            class="movie-item"
            v-for="i in movie_list"
            :value="i.id"
            :key="i.id"
            size="large"
            border
            >{{ i.name }}</el-radio
          >
        </el-radio-group>
      </div>
      <div class="dateChoose">
        <div class="text">日期：</div>
        <el-radio-group class="radios" v-model="radio2">
          <el-radio
            class="movie-item"
            v-for="i in dateData"
            :value="i.dateid"
            :key="i.dateid"
            size="large"
            border
            >{{ i.str }}</el-radio
          >
        </el-radio-group>
      </div>
    </div>
    <div class="main1">
      <div class="top">
        <div class="total">已找到{{ total }}场安排</div>
        <div class="add">
          <el-button
            style="width: 100px; height: 40px"
            type="primary"
            @click="addSession"
            >增加场次</el-button
          >
        </div>
      </div>
      <div class="session_list">
        <div class="nav">
          <span class="name">影片</span>
          <span class="time">时间 </span>
          <span class="hall">影厅</span>
          <span class="price">价格</span>
          <span class="opea">操作 </span>
        </div>
        <div
          class="item"
          v-for="(i, index) in session_list"
          :key="i.ID"
          :style="color(index)"
        >
          <span class="name">{{ i.Movie.ChineseName }}</span>
          <span class="time">
            <div class="start">{{ formatTime1(i.ShowTime) }}</div>
            <div class="end">{{ formatTime1(i.EndTime) }}</div>
          </span>
          <span class="hall">{{ i.Hall.Name }}</span>
          <span class="price">{{ i.Price }}</span>
          <span class="opea">
            <el-button class="btn" type="primary" @click="gotoInfo(i.ID)"
              >查看</el-button
            >
            <el-button class="btn" type="primary" @click="delSession(i.ID)"
              >删除</el-button
            >
          </span>
        </div>
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
.showSession {
  padding-top: 30px;
  width: 90%;
  min-width: 700px;
  margin: 0 auto;
  .chooseBox {
    border: 1px solid #ccc;
    padding: 16px;
    .movieChoose {
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px dashed #ccc;
      .text {
        width: 70px;
      }
      .radios {
        .movie-item {
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
    .dateChoose {
      display: flex;
      padding-top: 16px;
      .text {
        width: 70px;
      }
      .radios {
        .movie-item {
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .main1 {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      border-bottom: 1px solid rgb(105, 105, 105);
      margin-bottom: 30px;
      .total {
      }
      .add {
      }
    }
    .session_list {
      .nav,
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 20%;
        }
      }
      .nav {
        height: 80px;
        border-bottom: 1px solid rgb(105, 105, 105);
        background-color: rgb(156, 156, 156);
        span {
          font-size: 22px;
          color: rgb(255, 255, 255);
          text-align: center;
        }
      }
      .item {
        height: 70px;
        span {
          text-align: center;
        }
        .btn {
          width: 50px;
        }
      }
    }
  }
}
</style>
