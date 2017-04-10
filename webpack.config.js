var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/src/',
	entry: "./js/index.js",
	module: {
		loaders: [{ //JS的处理loader
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015'],
				plugins: ['react-html-attrs'] //组件的插件配置
			}
		}, { //CSS的处理loader
			test: /\.css$/,
			// loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			loader: 'style-loader!css-loader'
		}]
	},
	output: {
		path: __dirname + "/src/",
		filename: "bundle.js"
	}
};