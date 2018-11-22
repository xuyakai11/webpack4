const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module:{
   	rules:[
   		{
   		  test: /\.js$/,
   		  exclude: /(node_modules|bower_components)/,
   		  use: {
   		    loader: 'babel-loader',
   		    options: {
   		      presets: ['@babel/preset-env']
   		    }
   		  }
   		},
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
      {
	      test: /\.html$/,
	      use: [{
	        loader: 'html-loader',
	        options: {
	          minimize: true
	        }
	      }]
      }
   	]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: "index.html", // 编译后的文件名称
      template: path.resolve(__dirname, "src")+'/index.html',
      chunks:['index'],
      cache: true
    }),
    new HtmlWebpackPlugin({
      title: 'detail',
      filename: "detail.html", // 编译后的文件名称
      template: path.resolve(__dirname, "src")+'/detail.html',
      chunks:['print'],
      cache: true
    })
  ]
};