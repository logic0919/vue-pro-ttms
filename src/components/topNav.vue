<script setup>
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { token, name, avatar } = storeToRefs(userStore)
</script>

<template>
  <div class="topNav">
    <div class="main">
      <div class="left">
        <img src="../assets/image/logo.png" alt="" class="logo" />
        <a href="" class="movie">首页</a>
        <a href="" class="index">电影</a>
      </div>
      <div class="right1">
        <el-button class="btn" v-if="!token" type="primary" plain
          >登录</el-button
        >
        <div class="show" v-else>
          <img :src="avatar" class="avatar" alt="" />
          <div class="name">{{ name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  text-decoration: none;
}
.topNav {
  width: 100%;
  min-width: 1000px;
  height: 90px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(201, 201, 201);
  .main {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      height: 100%;
      .logo {
        width: 220px;
        height: 100%;
      }
      .movie,
      .index {
        width: 70px;
        height: 90px;
        line-height: 90px;
        font-size: 20px;
        text-align: center;
        color: rgb(255, 255, 255);
      }
    }
    .right1 {
      width: 140px;
      .btn {
        width: 60px;
        height: 30px;
        // border-color: rgb(46, 93, 232);
        background-color: rgb(255, 255, 255);
        border-radius: 6px;
      }
      .show {
        width: 50px;
        display: flex;
        align-items: center;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
          border: 2px solid rgb(224, 224, 224);
        }
        .name {
          font-size: 17px;
        }
      }
    }
  }
}
</style>
