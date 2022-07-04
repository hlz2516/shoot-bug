<template>
  <div id="home">
    <div id="left">
        普通用户主页
        <br>
        <router-link to="/user/posts">帖子浏览区</router-link><br>
        <router-link to="/user/post">帖子详情页</router-link><br>
        <router-link to="/user/postedit">我要发帖</router-link>
    </div>
    <div id="right">
        <router-view ></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #home{
        width: 1300px;
        height: 650px;
        margin: 0 auto;
        margin-top: 65px;
        box-sizing: border-box;
        border: 1px solid yellowgreen;
        display: flex;
    }

    #left{
        flex: 0.4;
        border: 1px solid orange;
        margin: 5px;
    }

    #right{
        flex: 1.6;
        border: 1px solid red;
        margin: 5px;
    }
</style>