# React Note
[TOC]
## 环境配置

### npm 安装包
* npm init 初始化项目，生成package.json文件，内部显示了所有安装的包
* npm install -g packageName  全局安装
* npm install --save packageName 当前项目安装

### webpack 把所有依赖包整合成bundle.js文件
* webpack 编译打包
* webpack --watch 自动编译打包
* webpack-dev-server --content-base --hot --inline 
启动webpack服务器，并进行热更新，其中引入的js文件为
```
<script type="text/javascript" src="http://localhost:8080/bundle.js"></script>
```

##react模块的定义和使用
### 定义
```
import React from 'react';

export default class ComponentFooter extends React.Component {
    render() {
        return (
            <footer>
                <h1>这里是页脚，一般放置版权的信息</h1>
            </footer>
        )
    }
}
```
### 模块中引入其他模块使用
```
import React from 'react';
import BodyChild from './bodyChild';
export default class BodyIndex extends React.Component {
    render() {
        return (
            <div>
                <h2>这里是页面主体内容</h2>
                <BodyChild/>
            </div>
        )
    }
}
```
### 页面中使用模块
* index.html
```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="./src/css/style.css">
</head>
<body>
<div id="example"></div>
<!-- <script type="text/javascript" src="./src/bundle.js"></script> -->
<script type="text/javascript" src="http://localhost:8080/bundle.js"></script>
</body>
</html>
```
* index.js
```
var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';

class Index extends React.Component {
    render() {
        return (
            <div>
                <ComponentHeader/>
                <BodyIndex userId='123'/>
                <ComponentFooter/>
            </div>

        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('example'));
```

***
##JSX语法
### 三元表达式
```
<p>{usreName==''?'用户未登录'？'用户名：'+userName}</p>
```
在定义变量时：
```
{
    var userName = ''；
    return (
        ...
    )
}
```
### bool判断
在tag中使用定义参数时，引用的参数值不用''包裹
```
<p><input type = 'button' disables={boolIntpu} value='默认按钮'/></p>
```
 
### 注释
JSX中注释也是写在大括号内
```
import React from 'react';
export default class BodyIndex extends React.Component{
    render(){
        //js部分注释，安装js注释方式编写

        return (
        {/*JSX部分，注释按照JSX方式编写在大括号内*/}
        )
    }
}
```

### 解析HTML
 1. html中的&nbsp;之类的标签，手动转码成\u.....的Unicode;
 2. 在JSX标签中使用dangerouslySetInnerHTML = {{__html : html}}
 ```
 var htm; = '';
 <p dangerouslySetInnerHTML = {{__html : html}}></p>
 ```
***
##生命周期

### componentWillMount(){} :页面将要加载时

### componentDIdMount(){} :页面加载完成后执行

### 父子组件中的加载顺序
Index：componentWillMount
Body：compoentWillMount
Body：componentDidMount
Index：componentDidMount

***

## 属性与事件
constructor(){} :构造函数，可用来初始化state等属性
```
constructor(){
    super();//调用基类的所有初始化方法
    this.state = {
        userName :'Bili'
    };
}
```
### state属性
* 对于模块来说，是自身属性
* 作用域只在当前组件，不会影响其他的组件
* 使用：{this.state.userName}
* 在render(){}中更改state的值：this.setState({});

### props属性
* 对于模块来说，属于外来属性，是接收其他组件传递过来的属性
* 使用场景
例如，父组件给子组件传递参数
父组件中：
```
<BodyIndex userId='123'/>
```
子组件中：
```
{this.props.userId}
```
* 作用域只在接收到的当前组件，不会影响其他组件

### 事件与属性的双向关系
* 绑定事件
```
//无参
<input type ="button" value="提交" onClick = {this.changeUserInfo.bind(this)} />
//有参
<input type ="button" value="提交" onClick = {this.changeUserInfo.bind(this,value)/>
```
事件定义：
```
changeUserInfo(value){}
```
* 子组件向父组件传参
子组件调用父组件传入的function
子组件绑定事件，值为调用父组件传入的参数：
```
<input type = 'text' onchange={this.props.handleChildValueChange}>
```
父组件，在调用的子组件上绑定事件，并定义方法：
```
handleChildValueChange(event){
    this.setState({age:event.target.value})
}

render:
<BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
```

### 可复用组件
* 传入类型的强制约束
```
export default class XX{}
XX.propTypes = {
    userid:React.PropTypes.number.isRequired //类型.必传
    username:React.PropTypes.array//string,node...
    ...
}
//定于属性默认值
const defaultProps = {
    username='默认用户名'
}
export default class XX{}
XX.defaultProps = defaultProps;
```
* 父页面参数传递给孙页面
子页面中定义
```
{...this.props}
```

### 组件的Refs
Refs是访问奥组件内部DOM节点唯一可靠的方法，会自动销毁对子组件的引用
不要在render或render之前对Refs进行调用，不要滥用Refs
1.直接获取dom，并转换为ReactDOM
```
var mySubmitButton = document.getElementById('mySubmitButton');
ReactDOM.findDOMNode(mySubmitButton);
```
2.ref
```
//定义
<input type='button' ref='submitBtn' value='submit'/>
//获取
this.refs.submitBtn
```

### 独立组件间共享Mixins
做组件间的事件共享
* 使用需要导入Mixins包
```
sudo npm install --save react-mixin@2
```
* 使用
```
class {}
ReactMixin(BodyIndex.prototype, MixinLog);
//在需要使用的地方
MixinLog.log()
```
***

## React 样式

### 内联样式
* JSX定义样式
解析为内联样式，native开发中常用
在render函数中定义
```
class{
    
    render(){
        const styleComponentHeader = {
            header:{
                backgroundColor:'#333',
                color:'#FFF',
                'padding-top':'15px', //使用CSS原始属性时，key需要用引号包裹
                paddingBottom:'15px'
            }
        }
        return(
            <header style = {styleComponentHeader.header}> </header>
        )
    }
}
```
* 引用CSS文件中的样式
className关键字定义css的class，全局样式，会污染其他组件的样式
```
<header className='xxx'> </header>
```
* 内联样式中的表达式
在header中绑定单击事件，切换header的padding值，在JSX的CSS样式中编写表达式,使用（）来读取定义的state
```
import React from 'react';
export default class ComponentHeader extends React.Component {
    contstructor(){
        supper();
        this.state = {
            miniHeader:false
        }
    };
    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
            });
    };
    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: '#333',
                color: '#fff',
                paddingTop: (this.state.miniHeader)?'3px':'15px',
                paddingBottom: (this.state.miniHeader)?'3px':'15px'
            }
        }
        return (
            <header style={styleComponentHeader.header} onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
            </header>
        )
    }
}
```

### CSS模块化
* package.json更新为
```
{
  "name": "imooc",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-loader": "^6.4.1",
    "babel-plugin-react-html-attrs": "^2.0.0",
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-react": "^6.23.0",
    "babelify": "^7.3.0",
    "css-loader": "^0.28.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-mixin": "^2.0.2",
    "style-loader": "^0.16.1",
    "webpack": "^2.3.2",
    "webpack-dev-server": "^2.4.2"
  }
}
```
* webpack.config.js更新为
```
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src/',
    entry: "./js/index.js",
    module: {
        loaders: [{ //JS的处理loader
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: ['react-html-attrs'] //组件的插件配置
            }
        }, { //CSS的处理loader
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }]
    },
    output: {
        path: __dirname + "/src/",
        filename: "bundle.js"
    }
};
```
* 使用
```
import React from 'react';
var footerCss = require('../../css/footer.css');//引入CSS

export default class ComponentFooter extends React.Component {
    render() {
        console.log(footerCss);
        return (
            <footer className={footerCss.miniFooter}>//使用CSS文件中定义的class
                <h1>这里是页脚，一般放置版权的信息</h1>
            </footer>
        )
    }
}
```

### JSX样式与CSS的互转
* [CSS TO REACT 工具](http://staxmanade.com/CssToReact/)

### AntDesign样式框架
* [AntDesign](https://ant.design/index-cn)
* 使用
webpack.config.js的cssLoader变更回style-loader!css-loader
***

## React Router
### 概念
* 用来管理页面之间的跳转和路由关系
* sudo npm install --save react-router 
* 建立根入口文件root.js,引入Index组件和ReactRouter
```
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import {
    Router,
    Route,
    hashHistory
} from 'react-route';

export default class Root extends React.Component {
    render() {
        return (
            <Router history={hashHistory}> 
                <Route component={Index} path="/"></Route> //component={组件}，path=“路径”
                <Route component={List} path="list"></Route>
            </Router>
        );
    }
}


ReactDOM.render(<Root/>, document.getElementById('example'));
```
* package.json，webpack.config.js 内的入口也改为root
* link
```
<Link to='path'>text</Link>
```

### 参数传递
* 在 Route的path中定义参数名
```
<Route component={List} path="list/:id"></Route>
```
* 在List中接收
```
...
return(
    <div>
        <h2>传入参数为：{this.props.params.id}</h2>
    </div>
    );
```
***

