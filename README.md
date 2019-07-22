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
npm i style-loader css-loader -D

npm i node-sass sass-loader -D

npm i file-loader url-loader -D
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
├── src
|  ├── components
|  |  ├── about
|  |  ├── App.jsx => 根组件
|  |  ├── common
|  |  |  ├── Content.jsx
|  |  |  ├── Footer.jsx
|  |  |  └── Header.jsx
|  |  ├── home
|  |  └── movie
|  ├── index.html
|  └── index.js => 入口文件
└── webpack.config.js
```

## 基本布局

## 路由设计

```javascript
npm i react-router-dom -S
```

```javascript
// 刷新高亮当前标题
<Menu defaultSelectedKeys={[location.hash.split('/')[1] || 'home']}></Menu>
```

**电影内页路由**

```javascript
// 注意 exact
<Switch>
    <Route exact path={`${path}`} render={() => <Redirect to={`${path}/in_theaters/1`} />} />
    <Route path={`${path}/detail/:id`} component={Detail} />
    <Route path={`${path}/:type/:pnum`} component={PContent} />
</Switch>
```

## 获取数据

0. 根路径：`https://api.douban.com`
1. 正在热映：`/v2/movie/in_theaters?start=0&count=1`
2. 即将上映：`/v2/movie/coming_soon?start=0&count=1`
3. 排行榜：`/v2/movie/top250?start=0&count=1`
4. 电影详情：`/v2/movie/subject/26861685`

```javascript
// 解决跨域
npm i fetch-jsonp -S
```

```javascript
// 挂载到入口或根组件上
import fetchJSONP from 'fetch-jsonp';
Component.prototype.$http = fetchJSONP;
Component.prototype.baseURL = 'https://api.douban.com';
Component.prototype.apikey = '0df993c66c0c636e29ecbb5344252a4a';
```

## 电影分页

点击分页 => `this.props.history.push(`/movie/${type}/${pnum}`);` => `componentWillReceiveProps` => `getMovieData()`