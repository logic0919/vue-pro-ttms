<script setup>
import { Promotion } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const nowRoute = route.params.id
const introRoute = `/movieDetail/${nowRoute}/introduction`
const performerRoute = `/movieDetail/${nowRoute}/performer`
const pictureRoute = `/movieDetail/${nowRoute}/picture`
const sessionRoute = `/movieSession/${nowRoute}`
router.replace(introRoute)
</script>
<template>
  <div class="movieDetail">
    <div class="top">
      <div class="top-main">
        <img class="img" src="../../assets/image/movie.png" alt="" />
        <div class="info">
          <div class="movieName">哈尔的移动城堡</div>
          <div class="type">类型：剧情、爱情</div>
          <div class="time">时长：108分钟</div>
          <button class="btn" @click="router.push(sessionRoute)">购票</button>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="menu">
        <el-menu
          active-text-color="rgb(215, 152, 230)"
          text-color="rgb(116, 116, 116)"
          background-color="rgb(255, 255, 255)"
          :default-active="introRoute"
          mode="horizontal"
          ellipsis="false"
          router
          style="border-bottom: 2px solid rgb(240, 240, 240)"
        >
          <el-menu-item :index="introRoute">
            <el-icon>
              <Promotion />
            </el-icon>
            <span style="font-size: 20px">介绍</span>
          </el-menu-item>
          <el-menu-item :index="performerRoute">
            <el-icon>
              <Promotion />
            </el-icon>
            <span style="font-size: 20px">演职人员</span>
          </el-menu-item>
          <el-menu-item :index="pictureRoute">
            <el-icon>
              <Promotion />
            </el-icon>
            <span style="font-size: 20px">图集</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="menushow"><router-view></router-view></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movieDetail {
  min-width: 1000px;
  .top {
    height: 340px;
    background-color: rgb(116, 116, 116);
    background: linear-gradient(
      to right,
      rgb(199, 234, 240),
      rgb(215, 152, 230)
    );
    padding-top: 60px;
    .top-main {
      width: 75%;
      margin: 0 auto;
      height: 400px;
      display: flex;
      justify-content: flex-start;
      .img {
        width: 240px;
        height: 330px;
        border: 6px solid rgb(255, 255, 255);
        margin-right: 100px;
      }
      .info {
        width: 280px;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // background-color: antiquewhite;
        .movieName,
        .type,
        .time {
          color: aliceblue;
          font-size: 16px;
          // height: 30px;
        }
        .time {
          margin-bottom: 60px;
        }
        .movieName {
          font-size: 30px;
        }
        .btn {
          width: 100%;
          height: 46px;
          border-color: transparent;
          background-color: red;
          color: rgb(255, 255, 255);
          font-size: 20px;
          letter-spacing: 10px;
        }
      }
    }
  }
  .main {
    width: 70%;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .menu {
      margin-bottom: 40px;
    }
  }
}
</style>
