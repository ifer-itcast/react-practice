# react-practice

## 搭建环境

**安装**

```javascript
npm init -y

npm i webpack webpack-cli webpack-dev-server -D

npm i @babel/plugin-proposal-class-properties -D

npm i html-webpack-plugin -D

npm i @babel/core babel-loader @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react -D

npm install react react-dom @babel/runtime -S

// AntD 按需加载
npm i babel-plugin-import -D

npm i antd -S
```

**样式和图片**

```javascript
npm i style-loader css-loader node-sass sass-loader file-loader url-loader -D
```

**配置**

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
});

module.exports = {
    mode: 'development',
    devServer: {
        compress: true,
        port: 3000
    },
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf|woff|woff2|eot|svg|jpg|png|gif|bmp$/i,
                use: 'url-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};
```

## 目录结构

tree -l 4 --ignore node_modules,dist

```
├── package-lock.json
├── package.json
├── README.md
├── src
|  ├── components
|  |  ├── about   => 关于
|  |  |  └── index.jsx
|  |  ├── App.jsx => 根组件
|  |  ├── common  => 公共组件
|  |  |  ├── footer
|  |  |  |  └── index.jsx
|  |  |  └── header
|  |  |     ├── index.jsx
|  |  |     └── style.scss
|  |  ├── home    => 首页
|  |  |  └── index.jsx
|  |  ├── movie   => 电影
|  |  |  ├── content.jsx
|  |  |  ├── detail.jsx
|  |  |  ├── index.jsx
|  |  |  └── style.scss
|  |  └── style.css => 全局样式
|  ├── index.html
|  └── index.js => 入口文件
└── webpack.config.js
```

## 基本布局

- 上：header
- 中
    - 首页的内容
    - 电影的内容
        - 左：电影类型
        - 右：对应列表
    - 关于
- 下：footer

## 路由设计

**安装**

```javascript
npm i react-router-dom -S
```

**刷新时保持顶部导航状态**

```javascript
<Menu defaultSelectedKeys={[location.hash.split('/')[1] || 'home']}></Menu>
```

**刷新时保持电影内页左侧导航状态**

```javascript

<Menu
    mode="inline"
    defaultSelectedKeys={[location.hash.split('/')[2] || 'in_theaters']}
    style={{ height: "100%", borderRight: 0 }}
>
    <Menu.Item key="in_theaters"><Link to={`${path}/in_theaters/1`}><Icon type="pie-chart" />正在热映</Link></Menu.Item>
</Menu>
```

**电影内页路由设计**

```javascript
// 注意 exact
<Switch>
    <Route exact path={`${path}`} render={() => <Redirect to={`${path}/in_theaters/1`} />} />
    // 注意顺序，之所以加上某个 type 下的 detail，是为了在 detail 刷新时也记录下侧边栏的状态
    <Route path={`${path}/:type/detail/:id`} component={Detail} />
    <Route path={`${path}/:type/:pnum`} component={PContent} />
</Switch>
```

## 获取数据

**豆瓣接口**

0. 根路径：`https://api.douban.com`
1. 正在热映：`/v2/movie/in_theaters?start=0&count=1`
2. 即将上映：`/v2/movie/coming_soon?start=0&count=1`
3. 排行榜：`/v2/movie/top250?start=0&count=1`
4. 电影详情：`/v2/movie/subject/26861685`

**解决跨域**

```javascript
// 解决跨域
npm i fetch-jsonp -S
```

**全局配置**

```javascript
// 挂载到入口或根组件上
import fetchJSONP from 'fetch-jsonp';
Component.prototype.$http = fetchJSONP;
Component.prototype.baseURL = 'https://api.douban.com';
Component.prototype.apikey = '0df993c66c0c636e29ecbb5344252a4a';
```

## 电影分页

```javascript
// 编程式导航进行跳转到当前组件，pnum 代表当前哪一页
this.props.history.push(`/movie/${type}/${pnum}`);
```

```javascript
// 命中路由
<Route path={`${path}/:type/:pnum`} component={PContent} />

// 触发 componentWillReceiveProps

// 获取数据 getMovieData()
```

```javascript
// 分页原理
const start = (pageNow - 1) * pageCount;
```

## 电影详情

注意容错处理，第一次 render 时数据还没拿过来。

```javascript
// 详情页也是编程式导航进行的跳转
// 分页是 element diff，改变了路由的 props 数据，触发 componentWillReceiveProps
// 详情是 component diff，直接替换了组件，触发 componentWillMount
this.props.history.push(`/movie/${this.props.match.params.type}/detail/${id}`);
```