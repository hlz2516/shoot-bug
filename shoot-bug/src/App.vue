<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    this.$router.push({path:'/'})
  },
}
</script>

<style>
#app {
  
}

/* 通用样式写这里 */
body{
  margin: 0;
  padding: 0;
}

</style>
