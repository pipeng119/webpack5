const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    // 单入口
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        test: './src/test.js'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash:10].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
}