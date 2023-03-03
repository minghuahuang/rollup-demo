## Rollup 简单使用

### 项目启动

安装依赖

```shell
npm install
```

启动项目


### 问题

1. 启动 rollup 编译报错：`Cannot find module 'node:process'`

原因及解决：npm 版本过低，升级到 npm 7.0以上。

2. 编译报错：`RollupError: Node tried to load your configuration file as CommonJS even though it is likely an ES module. To resolve this, change the extension of your configuration to ".mjs", set "type": "module" in your package.json file or pass the "--bundleConfigAsCjs" flag.`

原因：node版本大于13时，默认是ES Module方式。

解决：

- package.json 中添加 `"type": "module"`。

- 配置文件的后缀名改成 rollup.config.mjs。