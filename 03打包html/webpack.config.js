const {
    resolve
} = require('path');
const HtmlWebpackPulgin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPulgin({
            template: './src/index.html'
        })
    ]


}