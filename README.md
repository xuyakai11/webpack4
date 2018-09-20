# 从零开始 webpack4

## 一、安装

1.本地安装webpack4+
```shell
  npm install --save-dev webpack webpack-cli
```

## 二、入口：entry

1.entry:'./src/index.js'

2.对象,按照name生成多个js文件,放入html中

``` javascript
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  }
```

3.数组，数组中的js合成一个js放入生成的html文件中

``` javascript
entry: ['./src/index.js','./src/print.js']
```

## 三、模块解析

1.css
安装：
``` shell
npm install --save-dev style-loader css-loader
```

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

2.图片
安装:
``` shell
npm install --save-dev file-loader
```

``` javascript
{
   test: /\.(png|svg|jpg|gif)$/,
   use: [
     'file-loader'
   ]
}
```

3.使用sass
安装：
``` shell
npm install node-sass --save-dev
npm install sass-loader --save-dev
```

第二步，打开webpack.base.config.js在loaders里面加上
``` javascript
{
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
}
```

## 四、plugins

1.使用html插件
安装：
``` shell
npm install --save-dev html-webpack-plugin
```

``` javascript
plugins: [
    new HtmlWebpackPlugin({
       title: 'Output Management'
    })
]
```

2.清理 /dist 文件夹
安装：
``` shell
npm install --save-dev clean-webpack-plugin
```

## 五、显示错误源代码的位置
``` javascript
devtool: 'inline-source-map'
```
## 六、热重载 webpack-dev-server

安装：
``` shell
npm install --save-dev webpack-dev-server
```

