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

<style scoped>
@import "assets/css/base.css";
</style>
