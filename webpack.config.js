const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const mode = process.env.PRODUCTION_MODE || 'development';

module.exports = {
    mode: mode,
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
                loader: 'svg-inline-loader?classPrefix' // 👈 Add loader
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
        new webpack.NamedModulesPlugin(),
        new ManifestPlugin({
            fileName: 'manifest.json',
            seed: {
                "short_name": "DevPortfolio",
                "name": "Devang Patel - Portfolio",
                "icons": [
                  {
                    "src": "/img/Logo.png",
                    "type": "image/png",
                    "sizes": "300x300"
                  },
                ],
                "start_url": ".",
                "background_color": "#350058",
                "display": "standalone",
                "scope": ".",
                "theme_color": "#350058"
            }
        })
    ],
    devtool: (mode === 'development') ? 'inline-source-map' : '',
    devServer: {
        hot: true,
        compress: true,
        watchContentBase: true,
    }
};
