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
npm install --save-dev file-loader
```

在rules里面加上

``` javascript
{
   test: /\.(png|svg|jpg|gif)$/,
   use: [
     'file-loader'
   ]
},
{
    test: /\.(woff|woff2|eot|ttf|otf)$/,
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

在rules里面加上
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
plugins里加上

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

plugins里加上
``` javascript
new CleanWebpackPlugin(['dist'])
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

``` javascript
devServer: {
  contentBase: path.join(__dirname, "dist"),
  port: 8080 // 端口号
}     
```
