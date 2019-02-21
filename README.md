# web-bolilerplate-for-beginners

## 主要用来学习ES6

### 1.package.json中
```
"scripts": {
    "a": "echo \"hello world\"",
    "test": "nodemon ./test",
    "build": "rimraf dist && webpack",
    "server": "anywhere --port 8001   ",
    "start": "opn http://localhost:8080/webpack-dev-server/index.html && webpack-dev-server",
    "ES6": "babel  -w src/ES6 -d  lib/ES6"
  }
```
```
npm run ES6   //启动

//控制台执行
babel  -w src/ES6 -d  lib/ES6  
// -w ==>  --watch 观察者模式 
// -d ==>  dir 输出到

//运行结果

src/ES6/class.js -> lib/ES6/class.js
src/ES6/class1.js -> lib/ES6/class1.js
src/ES6/enumerate.js -> lib/ES6/enumerate.js
src/ES6/generator.js -> lib/ES6/generator.js
src/ES6/iterator.js -> lib/ES6/iterator.js
src/ES6/let_const.js -> lib/ES6/let_const.js
src/ES6/module.js -> lib/ES6/module.js
src/ES6/promise.js -> lib/ES6/promise.js
src/ES6/函数.js -> lib/ES6/函数.js
src/ES6/数组扩展.js -> lib/ES6/数组扩展.js
src/ES6/解构赋值.js -> lib/ES6/解构赋值.js

```


## 安装

```
  # 安装依赖
  $ npm install

```

**有以下两种方法运行项目**

### 1. 不采用devServer运行项目

```bash
  # 编译代码
  $ npm build

  # 查看效果
  $ npm start

```
### 2. 采用devServer运行项目

```bash
  # 采用webpack-dev-server编译代码
  $ npm start

```

## 使用方式

 ES6/7 :  修改src/ES6/来测试你的ES6/7语法即可

 React :  修改src/react.js来学习react代码

 Redux :  修改src/redux/来学习redux代码

 async :  修改src/async/来学习异步编程

 async/generator : 如果你想用更高级的类似async/Promise等等语法，请修改webpack.config.js

## 页面

![示例页面](./demo.png)

