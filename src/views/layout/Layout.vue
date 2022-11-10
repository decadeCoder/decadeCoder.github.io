<template>
  <el-container>
    <el-header><NavBar /></el-header>
    <el-container>
      <el-aside width="200px"><SideBar /></el-aside>
      <el-main><AppMain /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: { AppMain, NavBar, SideBar }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
  .el-header {
    padding: 0;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-main {
    background-color: pink;
  }
}
</style>
