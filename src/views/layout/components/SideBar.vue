<template>
  <div id="sidebar">
    <el-menu
      default-active="1"
      unique-opened
      background-color="#333744"
      text-color="#fff"
      active-text-color="#409EFF"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
      </el-submenu>
      <el-submenu v-for="item in menuList" :key="item.id" :index="item.id + ''">
        <template slot="title">
          <i :class="iconsObj[item.id]"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="itemChild in item.children"
          :key="itemChild.id"
          :index="itemChild.id + ''"
        >
          <template>
            <i class="el-icon-menu"></i>
            <span>{{ itemChild.title }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 2,
          title: '用户管理',
          children: [
            { id: 2.1, title: '用户1' },
            { id: 2.2, title: '用户2' }
          ]
        },
        {
          id: 3,
          title: '权限管理',
          children: [
            { id: 3.1, title: '权限1' },
            { id: 3.2, title: '权限2' }
          ]
        }
      ],
      iconsObj: {
        2: 'el-icon-user',
        3: 'el-icon-setting'
      }
    }
  }
}
</script>

<style lang="less" scoped>
#sidebar {
  width: 100%;
  .el-menu {
    border: none;
  }
  .el-menu-item {
    min-width: 200px;
  }
}
</style>
