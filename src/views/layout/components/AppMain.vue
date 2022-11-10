<template>
  <div>
    <!-- 面包屑 -->
    <Breadcrumb class="breadcrumb-container" />
    <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default { components: { Breadcrumb } }
</script>

<style lang="less" scoped></style>
