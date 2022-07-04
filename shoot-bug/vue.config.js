const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //配置代理服务器(解决跨域)
  devServer:{
    proxy:{
      //当发送请求的url中带有'/api'，则往目标服务器发送请求
      'api':{
        target:'http://localhost:8000'
      }
    }
  }
})
