# Plugin插件合集
> 插件本质是是对组件能力的拓展，通过的轻量插件，可以非常有趣的工作。详情可以参考[插件模型规范](https://docs.serverless-devs.com/sdm/serverless_package_model/package_model#%E6%8F%92%E4%BB%B6%E6%A8%A1%E5%9E%8B%E8%A7%84%E8%8C%83)

## 包含内容
### [keep-warm-fc](https://github.com/devsapp/keep-warm-fc/tree/master/src)
通过定时触发器实现实例预热，降低`冷启动`的概率。
快速体验：
```
s init start-keep-warm-fc
```

### [website-fc](https://github.com/devsapp/website-fc/tree/master/src)

快速部署静态网站到阿里云函数计算平台

快速体验：
```
s init website-vuepress
```

### [layer-fc](https://github.com/devsapp/layer-fc/tree/master/src)

方便的使用[层](https://help.aliyun.com/document_detail/193057.html) 管理您的函数。主要解决种场景问题

1. 项目公共依赖包

快速体验：
```
s init layer-fc-public-module
```

2. 自定义customRuntime版本

快速体验：
```
s init layer-fc-custom-runtime
```

