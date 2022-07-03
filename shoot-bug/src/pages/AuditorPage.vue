<template>
  <div id="home">
    <div id="left">
        审核员主页
    </div>
    <div id="right">
        审核员帖子浏览区
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