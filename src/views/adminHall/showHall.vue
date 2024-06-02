<script setup>
// import { Location, Menu, Document, Setting } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { hallGetListService } from '@/api/hall'
import { computed, onMounted, provide, ref } from 'vue'
const route = useRoute()
const router = useRouter()
const theater_id = route.params.id
console.log(theater_id)
const hallList = ref([])
const hallNum = computed(() => {
  return hallList.value.length
})
hallList.value = [
  {
    CreatedAt: '2024-05-28T08:24:42Z',
    UpdatedAt: '2024-05-28T08:24:44Z',
    DeletedAt: null,
    ID: 1,
    Name: '星河世纪',
    theaterID: 1,
    SeatRow: 4,
    SeatColumn: 5,
    Seat: '1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1'
  },
  {
    CreatedAt: '2024-05-28T08:25:00Z',
    UpdatedAt: '2024-05-28T08:24:46Z',
    DeletedAt: null,
    ID: 2,
    Name: '启程',
    theaterID: 1,
    SeatRow: 4,
    SeatColumn: 5,
    Seat: '1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1'
  }
]
const getList = async () => {
  const res = await hallGetListService(theater_id)
  if (res.data.status === 200) {
    hallList.value = res.data.data.item
  } else {
    ElMessage({ message: '演出厅列表获取失败', type: 'error' })
  }
}
onMounted(() => {
  getList()
})
// 路由跳转至添加影厅的界面
const addHall = () => {
  router.push(`/admin/addHall/${theater_id}`)
}
const delHall = (targetId) => {
  hallList.value = hallList.value.filter((item) => item.ID !== targetId)
}
provide('delHall', (id) => {
  delHall(id)
})
</script>

<template>
  <div class="showHall">
    <div class="top">
      <div class="total">总共有{{ hallNum }}个演出厅</div>
      <div class="add">
        <el-button type="primary" icon="el-icon-plus" @click="addHall"
          >添加演出厅</el-button
        >
      </div>
    </div>
    <div class="main">
      <div class="nav">
        <div class="id">影厅id</div>
        <div class="name">影厅名称</div>
        <div class="row">影厅行数</div>
        <div class="col">影厅列数</div>
        <div class="opea">操作</div>
      </div>
      <hall-item
        v-for="(i, index) in hallList"
        :key="i.ID"
        :id="i.ID"
        :name="i.Name"
        :row="i.SeatRow"
        :col="i.SeatColumn"
        :index="index"
        :theater="theater_id"
      ></hall-item>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.showHall {
  width: 80%;
  min-width: 700px;
  margin: 0 auto;
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
  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .nav {
      display: flex;
      justify-content: space-between;
      height: 80px;
      background-color: rgb(235, 235, 235);
      background-color: rgb(127, 127, 127);
      color: white;
      font-size: 20px;
      font-weight: 500;
      div {
        width: 20%;
        text-align: center;
        line-height: 80px;
      }
    }
  }
}
</style>
