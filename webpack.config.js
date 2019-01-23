const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        global: './src/script.js',
        vendor: './src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  "style-loader",
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "postcss-loader",
                  "sass-loader",
                ],
            }, {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }, {
                test: /\.svg$/,
                loader: 'svg-loader' // 👈 Add loader
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css",
            // chunkFilename: "[id].css"
          }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/',
        }, { reload: false }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'cheap-eval-source-map',
    devServer: {
        hot: true,
        compress: true,
        watchContentBase: true,
    }
};
