const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].[hash:29].js'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                // 'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ]
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new EslintWebpackPlugin()

    ],
    devServer: {
        port: 9527,
        open: true,
        compress: true
    }
}