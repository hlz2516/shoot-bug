<template>
  <div id="area">
    <!-- 如果keepAlive属性为真，那么缓存该页面；否认，默认不缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
   
};
</script>

<style scoped>
#area{
  height: auto;
}
</style>