const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        test: './src/test.js'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash:10].js'
    },
    /*
        1. 可以将node_modules中的代码单独打包成一个chuank最终输出
        2. 自动分析多入口chunk中，有没有公共的文件，如果有，就会打包成单独的一个chunk
    */
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
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