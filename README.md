This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `explain`
1、先安装依赖 （我是直接用的yarn，npm的可以npm install）
2、装完依赖去node_modules里的webpack-dev-server下的lib下的server.js里配置正向代理 在122行express实例之后
3、用的redux和react-redux来管理数据 actionCreator去做axios请求 tabreducer里操作数据

整个流程：
	在tab的组件里获取store里的data（我们要渲染的数据通过axios请求到的）,defaultData(一开始请求到的数据，就是全部数据)
页面初次渲染的时候data是全部数据，直接渲染全部数据，当在输入框中输入内容搜索的时候会触发输入框上的onChange事件，在事件里先获取到输入框的内容，分两种情况：
	1、输入框内容为空的时候，直接去设置data为defaultData（一开始请求的全部数据）
	2、输入框内容不为空的时候，创建一个正则对象，检索包含输入的内容（全局检索不区分大小写），然后创建一个空数组，在去循环遍历defaultData，设置一个标志位，循环的defaultData里每一条数据的tags用上面创建的正则去验证，验证为true的就把标志位设为true，然后把所有标志位为true的数据存入新创建的那个空数组中，循环结束后派发一个action，并把这个新数组传进去，在reducer那边接收到，去设置data为这个新数组并返回，这样表格就重新渲染为所搜索的数据。
