<template>
  <div id="home">
    <div id="left">
      普通用户主页
      <br />
      <button @click="toPosts">帖子浏览区</button><br />
      <button @click="toPost">帖子详情页</button><br />
      <button @click="toPostEdit">我要发帖</button><br />
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
    toPost() {
      this.$router.push("/user/post/fjskhfksdhfushf12df1ds2");
    },
    toPostEdit() {
      this.$router.push("/user/postedit");
    }
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