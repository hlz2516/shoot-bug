<template>
  <div>
    <div class="header_container">
        <div class="nav-logo">
            <img src="../assets/logo_tmp.png" alt="" class="logo" >
            <h4>Shoot Bug</h4>
        </div>
        <div class="nav-search">
            <input 
            type="text" 
            class="search"
            placeholder="搜索你想要的帖子" 
            v-model="value" 
            ref='searchInput'>
            <button @click="toSearch">搜索</button>
        </div>
            <div @click="showModal" class="login-btn">登录</div>
            <!-- <span class="user"><img src="../assets/logo_tmp.png" id="picture">professer</span> -->
        </div>
  </div>
</template>

<script>


export default {
    name:'SearchBar',
    methods: {
        ...mapMutations({
            changeIsshowLoginModal:"showLoginModal/chanIsshowLoginModal"
        }),
        showModal() {
            this.changeIsshowLoginModal(true)
        }
    }
}
</script>

<style scoped>
    .header_container{
        width: 100%;
		height: 60px;
        background-color: #EFF2F7;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
        border-bottom: 1px solid lightslategray;
	}
    
    .nav-logo {
        width: 25%;
        height: 60px;
    }
    .nav-logo .logo{
        width: 40px;
        height: 40px;
        position: absolute;
        left: 30px;
        top: 8px;
        border: 1px solid #ffffff;
        border-radius: 50%;
    }

    .nav-logo h4 {
        font-size: 14px;
        font-weight: 700;
        color: rgb(53, 52, 52);
    }
    
    .nav-search {
        flex:1;
    }

    .login-btn {
        width: 30%;
        height: 60px;
        font-size: 16px;
        line-height: 60px;
    }

    /* .user {
        width: 25%;
        height: 60px;
    
    }

    .user img {
        width: 30px;
        height: 30px;
        border: 1px solid #ffffff;
        border-radius: 50%;
    } */

    /* .nav-container{
        width: 1300px;
        height: 48px;
        box-sizing: border-box;
        position: absolute;
        left: 15%;
        top: 50%;
        transform: translate(0,-50%);
        border: 1px solid blue;
    } */
</style>