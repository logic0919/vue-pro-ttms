<script setup>
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<template>
  <div class="movieDetail">
    <div class="top">
      <div class="main">
        <img class="img" src="../../assets/image/movie.png" alt="" />
        <div class="info">
          <div class="movieName">哈尔的移动城堡</div>
          <div class="type">类型：剧情、爱情</div>
          <div class="time">时长：108分钟</div>
          <button class="btn">购票</button>
        </div>
      </div>
    </div>
    <div class="main">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-menu-item index="1">Processing Center</el-menu-item>
        <!-- <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
                </el-sub-menu> -->
        <!-- <el-menu-item index="3" disabled>Info</el-menu-item>
                <el-menu-item index="4">Orders</el-menu-item> -->
      </el-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movieDetail {
  width: 100vw;
  min-width: 1000px;
  .top {
    height: 340px;
    background: linear-gradient(
      to right,
      rgb(199, 234, 240),
      rgb(215, 152, 230)
    );
    padding-top: 60px;
    padding-left: 180px;
    .main {
      width: 600px;
      height: 400px;
      // background-color: aquamarine;
      display: flex;
      justify-content: space-between;
      margin: 0;
      .img {
        width: 240px;
        height: 330px;
        border: 6px solid rgb(255, 255, 255);
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
    width: 90%;
    margin: 80px auto;
  }
}
</style>
