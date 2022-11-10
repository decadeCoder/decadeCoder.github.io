<template>
  <div id="navbar">
    <!-- logo和title -->
    <div class="title">
      <img src="../../../assets/img/login_bg.png" alt="" />
      <span>后台管理系统</span>
    </div>
    <!-- 头像 -->
    <div class="avatar-container">
      <div class="avatar-wrapper">
        <el-avatar
          shape="square"
          :size="40"
          src="https://empty"
          @error="errorHandler"
        >
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
      </div>
      <!-- 注销 -->
      <div class="btn-container">
        <el-button type="info" size="small" @click="logoutBtn">注销</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    errorHandler() {
      return true
    },
    // 注销
    logoutBtn() {
      localStorage.removeItem('token')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
#navbar {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #363d40;
  .title {
    float: left;
    margin-left: 20px;
    height: 100%;
    line-height: 60px;
    img {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
    span {
      margin-left: 20px;
      font-size: 20px;
      color: #fff;
      vertical-align: middle;
    }
  }
  .avatar-container {
    position: absolute;
    right: 50px;
    display: inline-block;
    margin-top: 10px;
    height: 100%;
    .avatar-wrapper {
      float: left;
    }
    .btn-container {
      float: right;
      margin: 5px 0 0 20px;
    }
  }
}
</style>
