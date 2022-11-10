<template>
  <div id="login">
    <div class="wrapper">
      <el-card class="box-card" shadow="hover">
        <div class="title">
          <span>管理系统</span>
        </div>
        <el-form ref="form" :model="user" :rules="rules" status-icon>
          <el-form-item prop="username">
            <el-input
              v-model="user.username"
              prefix-icon="el-icon-user"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="user.password"
              prefix-icon="el-icon-lock"
              clearable
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="handleBtn">
            <el-button @click="resetForm()">重置</el-button>
            <el-button @click="submitForm()" type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('发送网络请求')
          localStorage.setItem('token', 123)
          this.$router.push({ path: '/' })
        }
      })
    },
    resetForm() {}
  }
}
</script>

<style lang="less" scoped>
#login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/img/login_bg.png');
  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 250px;
    .box-card {
      width: 350px;
      height: 250px;
      .title {
        text-align: center;
        margin-bottom: 40px;
      }
      .handleBtn {
        text-align: right;
      }
    }
  }
}
</style>
