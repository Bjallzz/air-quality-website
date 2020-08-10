const path = require("path");

module.exports = {
	entry: "./src/main.tsx",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".css"]
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	}
};
