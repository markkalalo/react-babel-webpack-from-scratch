const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
        output: {
            filename: "bundle.[hash].js",
            path: path.resolve(__dirname, "dist"),
        },
        plugins: [
            new HtmlWebpackPlugin({
                favicon: './public/favicon.ico',
                template: "./public/index.html",
            }),
        ],
        resolve: {
            modules: [__dirname, "src", "node_modules"],
            extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        },
        module: {
            rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.scss$/,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            },
            {
                // npm install file-loader
                test: /\.png|svg|jpg|gif$/i,
                use: ["file-loader"],
            },
        ],
    },
};