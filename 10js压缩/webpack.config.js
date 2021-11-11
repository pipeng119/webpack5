const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // 压缩html代码
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true

                // collapseWhitespace: true,
                // keepClosingSlash: true,
                // removeComments: true,
                // removeRedundantAttributes: true,
                // removeScriptTypeAttributes: true,
                // removeStyleLinkTypeAttributes: true,
                // useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 9527,
        open: true,
        compress: true
    }
}