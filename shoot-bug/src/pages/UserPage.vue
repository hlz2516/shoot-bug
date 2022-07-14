<template>
  <div id="home">
    <div id="left" ref="left">
      普通用户主页
      <br />
      <button @click="toPosts">帖子浏览区</button><br />
      <button @click="toPostEdit">我要发帖</button><br />
      <button @click="toDrafts">草稿箱</button>
    </div>
    <div id="right">
      <MainArea></MainArea>
    </div>
  </div>
</template>

<script>
import MainArea from "./MainArea.vue";

export default {
  components: { MainArea },
  methods: {
    toPosts() {
      this.$router.push("/user/posts");
    },
    toPostEdit() {
      this.$router.push("/user/postedit");
      //隐藏左侧侧边栏
      this.hideAside();
    },
    toDrafts(){
      this.$router.push("/user/drafts");
    },
    showAside(){
      this.$refs.left.style.display = 'block'
    },
    hideAside(){
      this.$refs.left.style.display = 'none'
    }
  },
  mounted() {
    this.$bus.$on('showAside',this.showAside)
    this.$bus.$on('hideAside',this.hideAside)
  },
};
</script>

<style scoped>
#home {
  width: 1300px;
  height: auto;
  margin: 0 auto;
  margin-top: 65px;
  box-sizing: border-box;
  border: 1px solid yellowgreen;
}

#left {
  width: 29%;
  height: 600px;
  border: 1px solid orange;
  margin: 5px;
  display: inline-block;
  vertical-align: top;
}

#right {
  width: 69%;
  height: auto;
  border: 1px solid red;
  margin: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>