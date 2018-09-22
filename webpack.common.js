const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
    vendor: [
    	'./src/jquery-3.1.1.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
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
        test:/\.(sass|scss)$/,
        exclude: /node-modules/,  // 规避掉node_modules文件
        include: path.resolve(__dirname, "src"), // 指定解析文件路径
        use:['style-loader','css-loader','sass-loader']
      },
      {
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
				  loader:'url-loader',
				  options:{
				    limit:5000
				  }
				}]
      },
      {
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
				   'url-loader'
				]
      }
   	]
	},
  optimization:{
  	splitChunks:{
			cacheGroups: {
		    vendor:{
		        chunks:"all",
		        test: /[\\/]node_modules[\\/]/,
		        name:"vendor",
		        minChunks: 1, 
		        maxInitialRequests: 5,
		        minSize: 0,
		        priority:100
		    },
		    common: {
		        chunks:"all",
		        name: "common",
		        minChunks: 2,
		        maxInitialRequests: 5,
		        minSize: 0,
		        priority:1
		    }
			}
  	}
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: "index.html", // 编译后的文件名称
      template: './src/index.html',
      chunks:['index'],
      cache: true
    }),
    new HtmlWebpackPlugin({
      title: 'detail',
      filename: "detail.html", // 编译后的文件名称
      template: './src/detail.html',
      chunks:['vendor','common','print'],
      cache: true
    })
  ]
};