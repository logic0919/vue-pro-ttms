<script setup>
import { Location, Setting } from '@element-plus/icons-vue'
import { theaters } from '@/utils/data'
const adminHallRouter = (id) => {
  return `/admin/showHall/${id}`
}
const adminSessionRouter = (theater_id) => {
  return `/admin/showSession/${theater_id}`
}
</script>

<template>
  <div class="admin">
    <div class="menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>影院管理</span>
          </template>
          <el-sub-menu v-for="i in theaters" :key="i.key" :index="i.key">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ i.value }}</span>
            </template>
            <el-menu-item :index="adminHallRouter(i.key)"
              >演出厅管理</el-menu-item
            >
            <el-menu-item :index="adminSessionRouter(i.key)"
              >场次管理</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item index="/admin/addTheater">添加影院</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>影片管理</span>
          </template>
          <el-menu-item index="/movie">影片库</el-menu-item>
          <el-menu-item index="/admin/addMovie">添加影片</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="main"><router-view></router-view></div>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  width: 99%;
  min-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .menu {
    width: 220px;
  }
  .main {
    width: 100%;
  }
}
</style>
