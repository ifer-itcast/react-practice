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
            }
        ]
    }
};
```