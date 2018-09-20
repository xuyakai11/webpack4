const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "production", // "production" | "development" | "none"
    // entry: {
    //   app: './src/index.js',
    //   print: './src/print.js'
    // }, 按照name生成多个js文件
    entry: ['./src/index.js','./src/print.js'],//数组的方式多个合成一个js
    output:{
        filename: "[name].[hash].js", // string
        path: path.resolve(__dirname, "dist"), // string
        publicPath:""
    },
    // devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.css$/, // 处理less文件
                exclude: /node-modules/,  // 规避掉node_modules文件
                include: path.resolve(__dirname, "src"), // 指定解析文件路径
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
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
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Output Management'
        })
    ],
    // plugins: [
    //     new htmlWebpackPlugin({  // 本节课的重头戏！！！！！！
    //         template: ".html/index.html", // 模板文件
    //         filename: "index.html", // 编译后的文件名称
    //         title: "webpack title", // 指定编译后的H5标题
    //         inject: true, // true=body[静态文件编译到body底部]，head[编译到head中]
    //         hash: true, // 给静态文件添加hash值，和output-filename中指定chunkhash效果差不多
    //         showErrors: true, // 如果编译出错，错误直接显示在页面中，方便排错
    //         chunks: [] // 指定哪些静态文件打包进H5,
    //         // excludeChunks: ["jquery"] // 指定哪些静态文件不需要打包进H5
    //         // minify: {
    //         //     collapseWhitespace: true, // 去掉所有空格
    //         //     removeAttributeQuotes: true // 去掉所有不必要的引号
    //         // },
    //         // cache: true, // 文件变化才重新编译
    //         // chunksSortMode: "dependency", // 引入顺序： 根据依赖关系
    //         // xhtml: true // 兼容xhtml模式编译H5
    //     })
    // ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3000
    }
}