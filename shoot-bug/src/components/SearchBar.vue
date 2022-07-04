<template>
  <div id="search-bar">
    <!-- 测试用
    <button @click="toVisitor">游客</button>
    <button @click="toUser">普通用户</button>
    <button @click="toAuditor">审核员</button>
    <button @click="toRoot">超级管理员</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    toVisitor() {
      this.$router.replace("/");
    },
    toUser() {
      this.$router.replace("/user");
    },
    toAuditor() {
      this.$router.replace("/auditor");
    },
    toRoot() {
      this.$router.replace("/root");
    },
  },
};
</script>

<style scoped>
#search-bar {
}
</style>