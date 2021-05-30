const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/ts/app.ts",
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			// {
			// 	test: /\.ts$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 	  loader: "babel-loader",
			// 	  options: {
			// 		presets: ['@babel/preset-typescript']
			// 	  }
			// 	}
			// },
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		//filename: "bundle.js",
		path: path.resolve(__dirname,"dist"),
		//publicPath: "/robertogl-page/",
		
	},	
	plugins: [
		new MiniCssExtractPlugin({
			filename: "main.css",
		}),
		new HtmlWebpackPlugin({
			template: "src/views/home.html",
			hash: true
		}),
	],
	
};
