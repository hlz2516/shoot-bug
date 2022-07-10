<template>
  <div id="app">
    <navbar/>
    <SideBar/>
    <router-view></router-view>
    <Login v-show="isshowLoginModal"></Login>
  </div>
</template>

<script>
import NavBar from './components/HeaderNav.vue';
import SideBar from './components/SideBar.vue';
import Login from './components/Login.vue';
import { mapState } from 'vuex';



export default {
  components: {
    NavBar,
    SideBar,
    Login
  },
  //mapState就是一个vuex内置的计算属性方法，给他变量名和变量值，他会帮你计算出来
  computed:{
  ...mapState({
    isshowLoginModal:state=>state.showLoginModal.isshowLoginModal
  })
}
}
</script>

<style>


/* 通用样式写这里 */
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
