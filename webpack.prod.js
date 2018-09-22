const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: "production",
	devtool: 'none',
	output: {
	  filename: '[name].[chunkhash].js'
	},
	plugins:[
		new UglifyJSPlugin({
		  sourceMap: true
		}),
		new webpack.DefinePlugin({
		  'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.HashedModuleIdsPlugin()
	],
});