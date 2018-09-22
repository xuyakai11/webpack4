const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: "development",
	output: {
	  filename: '[name].js'
	},
  devtool: 'inline-source-map',
  plugins:[
  	new webpack.NamedModulesPlugin(),
  	new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
  	contentBase: path.join(__dirname, "dist"),
  	port: 3000,
  	hot:true,
  	openPage: 'index.html'
  }
});