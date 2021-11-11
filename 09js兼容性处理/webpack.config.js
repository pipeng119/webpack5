const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            /**
             * js的兼容性处理: babel-loader @babel/preset-env
             * 1. 基本js的兼容性处理: @babel/preset-env
             *      问题: 只能转化基本语法，如includes、Promise等语法不能转换
             * 2. 全部js兼容性处理: @babel/polyfill(在入口文件中，直接引入polyfill)
             *      问题：我只需要解决部分的兼容性问题，但polyfill是将所有的兼容性代码都引入了，体积太大400+k
             * 3. 需要做兼容性处理的才做：按需加载 
             * */
            test: /\.js$/,
            exclude: /node_moduels/,
            loader: 'babel-loader',
            options: {
                // 预设：指示babel做怎样的兼容性处理
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            // 按需家加载
                            useBuiltIns: 'usage',
                            // 指定core-js版本
                            corejs: {
                                version: 3
                            },
                            targets: {
                                chrome: '60',
                                firefox: '60',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }
                    ]
                ]
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 9527,
        open: true,
        compress: true
    }
}