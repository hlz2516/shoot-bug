<template>
  <div id="nav-bar">
    <img src="../assets/logo_tmp.png" alt="" id="nav-logo" >
    <div class="nav-container">
        <search-bar/>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';

export default {
    components:{
        SearchBar
    }
}
</script>

<style scoped>
    #nav-bar{
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        border: 1px solid black;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
    }

    #nav-logo{
        width: 48px;
        height: 48px;
        position: absolute;
        left: 30px;
        top: 8px;
    }

    .nav-container{
        width: 1300px;
        height: 48px;
        box-sizing: border-box;
        position: absolute;
        left: 15%;
        top: 50%;
        transform: translate(0,-50%);
        border: 1px solid blue;
    }
</style>