<template>
  <div>
    <div class="login-modal">
      <div class="mask" @click="close"></div>
      <div class="login-box">
        <span class="close" @click="close"><img src="../assets/close.webp"></span>
        <ul class="title">
          <li :class="isShowForm?'active':''" @click="isShowForm=true">手机号码登录</li>
         <!--  <li class="line">|</li>
          <li :class="!isShowForm?'active':''" @click="isShowForm=false">微信扫码登录</li> -->
        </ul>
        <div class="body">
            <div class="form" v-show="isShowForm">
              <div class="input-group">
                 <input type="text" placeholder="请输入手机号" v-model="userPhone">
              </div>
              <slide-verify :l="42" :r="20" :w="362" :h="140" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :style="{ width: '100%' }" class="slide-box" ref="slideBlock" :slider-text="msg"></slide-verify>
              <div class="input-group">
                <input type="text" placeholder="请输入短信验证码">
                <div @click="getSMSCode()" class="btn">获取验证码</div>
              </div>
              <div @click="toLogin()" class="btn">登录</div>
            </div>
           <!--  <div class="wx-qrcode" v-show="!isShowForm">微信扫码</div> -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SlideVerify from 'vue-monoplasty-slide-verify' // 拼图验证码

    Vue.use(SlideVerify)
export default {
    //拼图验证码
    data() {
    return {
      msg: "向右滑动"
    };
  },
  methods: {
    // 拼图成功
    onSuccess(times) {
      let ms = (times / 1000).toFixed(1);
      this.msg = "login success, 耗时 " + ms + "s";
    },
    // 拼图失败
    onFail() {
      this.onRefresh(); // 重新刷新拼图
    },
    // 拼图刷新
    onRefresh() {
      this.msg = "再试一次";
    },
  },
   //配置close方法，点击关闭图片，实现模态框的关闭
    methods:{
    ...mapMutations({
      chanIsshowLoginModal:"showLoginModal/chanIsshowLoginModal"
    }),
    close(){
      this.chanIsshowLoginModal(false);
    }
}
}
</script>

<style lang = "less" scoped>
  
/deep/.slide-box {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    canvas {
        position: absolute;
        left: 0;
        top: -120px;
        display: none;
        width: 100%;
        box-sizing: border-box;
    }
    .slide-verify-block{
        width: 85px;
        height: 136px;
    }
    .slide-verify-refresh-icon {
        top: -120px;
        display: none;
    }
    &:hover {
        canvas {
            display: block;
        }
        .slide-verify-refresh-icon {
            display: block;
        }
    }
}

</style>