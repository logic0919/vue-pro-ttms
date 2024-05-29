<script setup>
import { useUserStore } from '@/stores/index'
import { userUpdateService, userUpdateAvatarService } from '@/api/user'
// import { ElMessage } from 'element-plus'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const userStore = useUserStore()
const { token, id, name, avatar, email } = storeToRefs(userStore)
const isInfo = ref('')
isInfo.value = true
// isInfo.value = false
// 关于修改信息
const form = ref(null)
const formModel = ref({
  name: ''
})
const rules = {
  name: [
    // { required: true, message: '请输入昵称', trigger: 'blur' },
    // {
    //   pattern: /^\d{11}$/,
    //   message: '邮箱必须11位数字',
    //   trigger: 'blur'
    // }
  ]
}
// 修改昵称开关
const isNameChange = ref(true)
const switchChangeName = () => {
  isNameChange.value = !isNameChange.value
}
// 修改昵称函数
const userUpdate = async () => {
  const name = formModel.value.name
  if (!name) {
    switchChangeName()
    return
  }
  await form.value.validate()
  const res = await userUpdateService(name, token)
  if (res.data.status === 200) {
    userStore.setName(name)
    userStore.setlocalName(name)
    isNameChange.value = !isNameChange.value
    console.log(userStore.name)
  }
}
// 修改头像开关
const isAvatarChange = ref(false)
const switchChangeAvatar = () => {
  isAvatarChange.value = !isAvatarChange.value
}
const file = ref('')
// 选择文件
const handleFileUpload = (event) => {
  console.log(event.target.files[0])
  file.value = event.target.files[0]
}
// 上传文件
const submitFile = async () => {
  const formData = new FormData()
  formData.append('file', file.value)
  console.log(file.value)
  console.log(formData)
  const res = await userUpdateAvatarService(
    formData,
    localStorage.getItem('ttms_token')
  )
  console.log(res)
}
const switchInfo = () => {
  isInfo.value = true
}
const switchOrder = () => {
  isInfo.value = false
}
</script>

<template>
  <!-- <top-nav></top-nav> -->
  <div class="left">
    <div class="info">
      <el-avatar class="avatar" :size="50" :src="avatar" />
      <div class="id">id：{{ id }}</div>
      <div class="name">昵称：{{ name }}</div>
    </div>
    <div class="line"></div>
    <div class="nav">
      <ul>
        <li @click="switchInfo">个人信息</li>
        <li @click="switchOrder">我的订单</li>
      </ul>
    </div>
  </div>
  <div class="right">
    <div class="info1" v-show="isInfo">
      <div class="navName">个人信息</div>
      <div class="line"></div>
      <ul class="infoShow">
        <li>
          <h5 class="sortName">用户头像：</h5>
          <div class="avatarShow" v-if="!isAvatarChange">
            <div class="avatar"><el-avatar :size="50" :src="avatar" /></div>
            <el-button
              class="btn"
              type="primary"
              @click="switchChangeAvatar"
              plain
              >修改头像</el-button
            >
          </div>
          <div class="avatarChange" v-else>
            <input type="file" @change="handleFileUpload" />
            <button @click="submitFile">上传</button>
          </div>
        </li>
        <li>
          <h5 class="sortName">用户id：</h5>
          {{ id }}
        </li>
        <li>
          <h5 class="sortName">昵称：</h5>
          <div class="nameShow" v-if="!isNameChange">
            <div class="name">{{ name }}</div>
            <el-button
              class="btn"
              type="primary"
              @click="switchChangeName"
              plain
              >修改呢称</el-button
            >
          </div>
          <div class="nameChange" v-else>
            <el-form
              class="elform"
              :model="formModel"
              :rules="rules"
              ref="form"
            >
              <el-form-item prop="name" class="elinput">
                <el-input
                  v-model="formModel.name"
                  placeholder="请输入昵称"
                ></el-input>
              </el-form-item>
            </el-form>
            <el-button class="btn" type="primary" @click="userUpdate" plain
              >提交修改</el-button
            >
            <el-button
              class="btn"
              type="primary"
              @click="switchChangeName"
              plain
              >取消</el-button
            >
          </div>
        </li>
        <li>
          <h5 class="sortName">邮箱：</h5>
          {{ email }}
        </li>
      </ul>
    </div>
    <div class="orders" v-show="!isInfo">
      <div class="order">我的订单</div>
      <myOrder></myOrder>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  list-style: none;
}
.left {
  position: fixed;
  left: 20px;
  width: 14vw;
  min-width: 160px;
  height: 94vh;
  border-radius: 10px;
  background-color: rgb(195, 242, 242);
  padding-top: 30px;
  .info {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    // background-color: antiquewhite;
    .avatar {
      width: 120px;
      height: 120px;
      transition: all 0.5s;
    }
    .avatar:hover {
      width: 140px;
      height: 140px;
    }
    .id,
    .name {
      color: rgb(98, 98, 98);
      font-size: 16px;
    }
  }
  .line {
    width: 95%;
    height: 2px;
    background-color: rgb(155, 155, 155);
    margin: 0 auto;
    border-radius: 2px;
  }
  .nav {
    li {
      width: 90%;
      height: 40px;
      margin: 20px auto;
      background-color: rgb(157, 204, 235);
      line-height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 6px;
      color: rgb(255, 255, 255);
    }
  }
}
.right {
  margin-top: 20px;
  margin-left: 260px;
  width: 80vw;
  height: 94vh;
  border-radius: 10px;
  min-width: 400px;
  padding: 40px;
  background-color: rgb(240, 240, 240);
  .info1 {
    .navName {
      height: 30px;
      margin-bottom: 10px;
    }
    .line {
      width: 100%;
      height: 2px;
      background-color: rgb(155, 155, 155);
      margin: 0 auto;
      border-radius: 2px;
    }
    .infoShow {
      height: 330px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      li {
        height: 90px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px dashed rgb(158, 158, 158);
        .sortName {
          width: 100px;
          margin-right: 20px;
          font-size: 17px;
        }
        .avatarShow,
        .avatarChange {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .btn {
            margin-left: 20px;
          }
        }
        .nameShow,
        .nameChange {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .btn {
            margin-left: 20px;
          }
        }
      }
    }
  }
  .orders {
    .order {
      color: rgb(255, 100, 100);
      border-bottom: 1px solid rgb(156, 156, 156);
      height: 40px;
      padding-left: 15px;
      font-size: 22px;
      letter-spacing: 5px;
    }
  }
}
</style>
