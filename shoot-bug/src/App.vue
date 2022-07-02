<template>
  <div id="app">
    <nav-bar/>
    <home/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    NavBar,Home
  }
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
