<template>
  <div id="app">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
import store from "./store";

export default {
  name: "App",
  components: {
    NavBar,
  },
  mounted() {
    this.$router.push({ path: "/" });
    axios.get("/api/postdescs/pagesizes?size=10").then((resp) => {
      if (resp.data.code === 200) {
        store.setPostDescPageSize(resp.data.data);
      }
    });
  },
  methods: {

  },
};
</script>

<style>
#app {
}

/* 通用样式写这里 */
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>
