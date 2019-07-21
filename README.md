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
