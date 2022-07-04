# 项目配置说明  

## 基本配置

- npm run serve时自动打开页面  
package.json中"serve": "vue-cli-service serve --open"。open参数表示当运行npm run serve时自动打开页面  
需要注意的是，打开后如果地址为0.0.0.0，则需要去node_modules/@vue/cli-service/lib/commands/serve.js里
将其中的0.0.0.0修改为127.0.0.1（注意是1）就可以在启动项目的时候直接打开浏览器了

- 关闭语法检查
vue.config.js中lintOnSave:false。  

- 文件夹名简写配置  
jsconfig.json中添加文件夹名简写配置：  

```json
"com/*":[
        "src/components/*"
      ]
```

它表示src/components目录可以简写成com，但实际效果不生效；我们暂时能用的只有@表示src
