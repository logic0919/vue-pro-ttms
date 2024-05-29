<script setup>
import { sort } from '../../utils/data'
import {
  movieGetHotService,
  movieGetUnreleasedService,
  movieGetAllService
} from '../../api/movie'
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
const movie_list = ref([])
movie_list.value = [
  {
    id: 1,
    chinese_name: '战狼',
    english_name: 'chinese_wolf',
    category: '爱情 喜剧 动画 ',
    area: '中国',
    duration: 7200000000000,
    showtime: '2017-01-10T16:00:00Z',
    introduction: '爱国 超级爱国',
    img_path:
      'https://p0.pipi.cn/mmdb/54ecde87b530faecd887a9594b90e05caa15d.jpg?imageView2/1/w/160/h/220',
    on_sale: false,
    score: 0,
    sales: 0,
    directors: null,
    actors: null
  },
  {
    id: 2,
    chinese_name: '战狼',
    english_name: 'chinese_wolf',
    category: '爱情 喜剧 动画 ',
    area: '中国',
    duration: 7200000000000,
    showtime: '2017-01-10T16:00:00Z',
    introduction: '爱国 超级爱国',
    img_path:
      'https://p0.pipi.cn/mmdb/54ecde87b530faecd887a9594b90e05caa15d.jpg?imageView2/1/w/160/h/220',
    on_sale: true,
    score: 0,
    sales: 0,
    directors: null,
    actors: null
  }
]
watch(
  () => movie_list.value.length,
  (newValue) => {
    const sub = 5 - (newValue % 5)
    let arr = []
    for (let i = 0; i < sub; i++) {
      arr.push({
        id: -1,
        chinese_name: '',
        category: '',
        duration: 0,
        img_path: ''
      })
    }
    movie_list.value.push(...arr)
  },
  { immediate: true }
)
// 区分热映或是即将热映或是全部影片，默认正在热映hot
const nav_id = ref(0)
const sort_id = ref(0)
const page = ref(0)
// 切换导航
const switchNav = (num) => {
  nav_id.value = num
  //   sort和page都要归零
  sort_id.value = 0
  page.value = 0
  //   重新发送请求
  if (nav_id.value === 0) {
    getHot()
  } else if (nav_id.value === 1) {
    getUnreleased()
  } else if (nav_id.value === 2) {
    getAll()
  }
}
// 发送全部类型、第一页的函数
const getHot = async () => {
  const res = await movieGetHotService({
    page: page.value,
    id: sort_id.value
  })
  if (res.status === 200) {
    movie_list.value = res.data.data.item
  } else {
    ElMessage.error('获取影片列表失败')
  }
}
const getUnreleased = async () => {
  const res = await movieGetUnreleasedService({
    page: page.value,
    id: sort_id.value
  })
  if (res.status === 200) {
    movie_list.value = res.data.data.item
  } else {
    ElMessage.error('获取影片列表失败')
  }
}
const getAll = async () => {
  const res = await movieGetAllService({
    page: page.value,
    id: sort_id.value
  })
  if (res.status === 200) {
    movie_list.value = res.data.data.item
  } else {
    ElMessage.error('获取影片列表失败')
  }
}
// 切换类型
const switchSort = (e, num) => {
  console.log((e.target.style.color = 'blue'))
  console.log(num)
  sort_id.value = num
}
// const sortBkgc = (num) => {
//   return num === sort_id.value ? 'background-color: red' : 'background-color: white'
// }
// const test1 = computed(() => {
//   return
// })
// const arr1 = ref([ref(0), ref(0)])
// arr1.value[0].value = 2
// arr1.value[1].value = 4
// console.log(arr1.value[0].value)
// console.log(arr1.value[1].value)
const arr1 = new Array(sort.length).fill(ref(66))
const refs = ref(arr1)

watch(
  () => sort_id.value,
  (newValue) => {
    // console.log(refs.value[0].value)
    // console.log(oldValue)
    // console.log(newValue)
    console.log(refs.value[newValue].value)
    // if (oldValue) {
    //   refs.value[oldValue].value.style.backgroundColor = 'white'
    // }
    // refs.value[newValue].value.style.backgroundColor = 'red'
  },
  { immediate: true }
)
setTimeout(() => {
  console.log(refs.value[sort_id.value].value)
}, 1000)
</script>

<template>
  <div class="movie">
    <div class="top">
      <div class="hot" @click="switchNav(0)">热映</div>
      <div class="will" @click="switchNav(1)">即将上映</div>
      <div class="all" @click="switchNav(2)">所有影片</div>
    </div>
    <div class="main">
      <div class="nav">
        <div class="text">类型：</div>
        <div class="sort">
          <div
            class="sort-item"
            v-for="(i, index) in sort"
            :ref="refs[index]"
            :key="i"
            :style="{
              backgroundColor: index == sort_id ? 'red' : 'blue'
            }"
            @click="(e) => switchSort(e, index)"
          >
            {{ i }}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="show">
          <movieBox
            v-for="i in movie_list"
            :key="i.id"
            :id="i.id"
            :img="i.img_path"
            :name="i.chinese_name"
            :duration="i.duration"
            :category="i.category"
          ></movieBox>
        </div>
        <!-- <div class="page">
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
}
.movie {
  min-width: 1100px;
  .top {
    height: 70px;
    background-color: rgb(93, 93, 93);
    display: flex;
    justify-content: center;
    .hot,
    .will,
    .all {
      width: 130px;
      height: 100%;
      color: rgb(255, 255, 255);
      background-color: rgb(49, 95, 135);
      line-height: 70px;
      letter-spacing: 2px;
      text-align: center;
    }
  }
  .main {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    background-color: rgb(239, 239, 239);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .nav {
      height: 140px;
      width: 100%;
      border: 1px dashed rgb(102, 102, 102);
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .text {
        text-align: center;
        width: 6%;
      }
      .sort {
        width: 94%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .sort-item {
          margin-right: 10px;
          font-size: 10%;
          text-align: center;
          width: 60px;
          height: 30px;
          border-radius: 15px;
          line-height: 27px;
          border: 1px solid red;
        }
      }
    }
    .container {
      .show {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .page {
      }
    }
  }
}
</style>
