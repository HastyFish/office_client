# office_client

> 武昌理工竞赛项目前端部分  
>软件工程1604某小组成员分布:  1个技术总监+3个杂物人员
><a href="https://github.com/HastyFish/office_server">后端部分</a>  
>使用vue+elementUI

流程图见项目  

## 项目技术简介  
  核心思想单页面+路由控制显示不同主体部分  
  用ajax请求后台  
  问题点: 跨域请求  
  前台解决方案: 在config/index.js的dev中添加
  ```
  proxyTable: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {'^/api':''}
      }
    }
