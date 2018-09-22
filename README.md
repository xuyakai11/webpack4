# 快速使用 webpack4 构建项目
  
说明：请更新node至最新版本

1.clone项目到本地项目下

2.安装依赖
```shell
npm install
```

3.运行
```shell
npm run dev
```

如果你不想使用全部的依赖(模块、插件)，只需在package.json和webpack.config.js中去掉相应配置之后，再执行1,2,3步即可


# 从零开始 webpack4

## 一、安装

1.本地安装webpack4+
```shell
  npm install --save-dev webpack webpack-cli
```

## 二、入口：entry

1.单个js文件

``` javascript
  entry: './src/index.js'
```

2.对象方式,按照name生成多个js文件,放入html中

``` javascript
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  }
```

3.数组方式，数组中的js合成一个js放入生成的html文件中

``` javascript
entry: ['./src/index.js','./src/print.js']
```

## 三、模块解析

1.css

安装：
``` shell
npm install --save-dev style-loader css-loader
```

在rules里面加上

``` javascript
rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
```

2.图片、字体

安装:
``` shell
npm install --save-dev file-loader url-loader
```

在rules里面加上

``` javascript
{
  test: /\.(png|svg|jpg|gif)$/,
  use: [
     {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
},
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
     {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
},
```

3.使用sass

安装：
``` shell
npm install node-sass sass-loader --save-dev
```

在rules里面加上
``` javascript
{
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
}
```

4.babel es6转es5

安装：
``` shell
npm install -D babel-loader @babel/core @babel/preset-env
```

在rules里面加上
``` javascript
{
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```


## 四、plugins

1.使用html插件

安装：
``` shell
npm install --save-dev html-webpack-plugin
```
plugins里加上

``` javascript
plugins: [
    new HtmlWebpackPlugin({
       title: 'Output Management'
    })
]
```

2.处理html中静态资源文件
安装：
``` shell
npm i -D html-loader
```

在rules里面加上
``` javascript
{
  test: /\.html$/,
  use: [{
    loader: 'html-loader',
    options: {
      minimize: true
    }
  }]
}
```

3.清理 /dist 文件夹

安装：
``` shell
npm install --save-dev clean-webpack-plugin
```

plugins里加上
``` javascript
new CleanWebpackPlugin(['dist'])
```

## 五、配置生产和开发环境

安装：
``` shell
npm install --save-dev webpack-merge
```

1.通用配置文件：wepack.common.js 

2.开发环境，配置文件：webpack.dev.js

显示错误源代码的位置
``` javascript
mode: "development",
devtool: 'inline-source-map'
```

热重载

安装：
``` shell
npm install --save-dev webpack-dev-server
```

``` javascript
devServer: {
  contentBase: path.join(__dirname, "dist"),
  port: 8080 // 端口号
}     
```

配置模块热替换
``` javascript
new webpack.HotModuleReplacementPlugin()
```

3.生产环境，配置文件：wepack.prod.js

不需要source map
``` javascript
mode: "production",
devtool: 'none'
```

压缩输出
``` javascript
new UglifyJSPlugin()
```

chunkhash用于缓存没有做修改的文件，开发环境不能配置此值，会报错
``` javascript
output: {
  filename: '[name].[chunkhash].js'
}
```