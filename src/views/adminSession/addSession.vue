<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { hallGetListService } from '@/api/hall'
import { findtheaterId, findtheaterName, formatTime } from '@/utils/data'
import { movieSearchService } from '@/api/movie'
// import { sessionAddService } from '@/api/session'
import { ElMessage } from 'element-plus'
console.log(findtheaterId)
const route = useRoute()
// 确定了某个影院
const theater_id = route.params.theater_id

// 关于表单
const formModel = ref({
  theater_name: '',
  start: '',
  price: '',
  hall_name: '',
  movie_id: '',
  movie_name: ''
})
const form = ref(null)
const rules = ref({
  theater_name: [{ required: true, message: '请选择影院', trigger: 'blur' }],
  price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
  hall_name: [{ required: true, message: '请选择影厅', trigger: 'blur' }],
  movie_name: [{ required: true, message: '请选择影片', trigger: 'blur' }],
  start: [{ required: true, message: '请选择开场时间', trigger: 'blur' }]
})
const hall_list = ref([])
const movie_list = ref([])
const getHallList = async () => {
  const res = await hallGetListService(theater_id)
  if (res.data.status === 200) {
    hall_list.value = res.data.data
  } else {
    ElMessage({ message: '影厅列表获取失败', type: 'error' })
  }
}
formModel.value.theater_name = findtheaterName(Number(theater_id))
onMounted(() => {
  getHallList()
})
// 模拟数据
hall_list.value = [
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
const loading = ref(false)
//关于远程搜索
const remoteMethod = async (query) => {
  if (query) {
    loading.value = true
    const res = await movieSearchService(query)
    loading.value = false
    if (res.data.status === 200) {
      movie_list.value = res.data.data
    } else {
      movie_list.value = []
    }
  } else {
    movie_list.value = []
  }
}
// 从hall_list中找到Name属性为a的元素的ID属性
const getHallId = (name) => {
  hall_list.value.forEach((item) => {
    if (item.Name === name) {
      return item.ID
    }
  })
}
console.log(getHallId)
// 添加场次函数
const addSession = async () => {
  console.log(
    theater_id,
    formatTime(formModel.value.start) < formatTime(new Date())
  )
  //   await form.value.validate()
  //   if (formatTime(formModel.value.start) < formatTime(new Date())) {
  //     ElMessage.error('场次时间不能小于当前时间')
  //     return
  //   }
  //   const res = await sessionAddService({
  //     theater_id: theater_id,
  //     movie_id: formModel.value.movie_name,
  //     hall_id: formModel.value.hall_name,
  // show_time: formatTime(formModel.value.start),
  //     price: formModel.value.price
  //   })
  //   if (res.data.status === 200) {
  //     ElMessage({
  //       type: 'success',
  //       message: '添加成功'
  //     })
  //   } else {
  //     ElMessage({
  //       type: 'error',
  //       message: '添加失败'
  //     })
  //   }
}
</script>

<template>
  <div class="addSession">
    <div class="main">
      <el-form
        ref="form"
        :model="formModel"
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm form"
        :size="formSize"
        status-icon
      >
        <el-form-item label="影院名称" prop="theater_name" class="form-item">
          <el-input
            v-model="formModel.theater_name"
            disabled
            placeholder="请输入影院"
          />
        </el-form-item>
        <el-form-item label="影厅名称" prop="hall_name" class="form-item">
          <el-select
            v-model="formModel.hall_name"
            placeholder="请选择演出厅"
            style="width: 240px"
          >
            <el-option
              v-for="item in hall_list"
              :key="item.ID"
              :label="item.Name"
              :value="item.ID"
          /></el-select>
        </el-form-item>
        <el-form-item label="影片名称" prop="movie_name" class="form-item">
          <el-select
            v-model="formModel.movie_name"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入影片名称"
            remote-show-suffix
            :remote-method="remoteMethod"
            :loading="loading"
            style="width: 240px"
          >
            <el-option
              v-for="item in movie_list"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="价格" prop="price" class="form-item">
          <el-input v-model="formModel.price" placeholder="请输入价格" />
        </el-form-item>
        <el-form-item label="开场时间" prop="start" class="form-item">
          <el-date-picker
            v-model="formModel.start"
            type="datetime"
            placeholder="请选择开场时间"
          />
        </el-form-item>
        <el-button class="btn" type="primary" @click="addSession"
          >添加电影</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.addSession {
  width: 80%;
  margin: 0 auto;
  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .form {
      width: 70%;
      .form-item {
        margin-top: 40px;
        // border: 1px solid red;
      }
      .tags {
        .tag {
          width: 90px;
          height: 40px;
          margin-right: 10px;
          margin-bottom: 10px;
          text-align: center;
          line-height: 40px;
        }
      }
      .btn {
        width: 80%;
        height: 50px;
        margin: 70px 100px;
      }
    }
  }
}
</style>
