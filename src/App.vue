<template>
  <div id="app">
      <router-link to="/system"></router-link>
      <!-- 路由占位符 -->
      <router-view></router-view>
  </div>
</template>


<script>
export default {
    name: 'app',
    components: {
    }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/iconfont/iconfont.css";
.el-button{
  cursor: auto;
}
.el-button:hover {
  box-shadow: none !important;  /* 使用!important确保覆盖其他样式 */
}
</style>
