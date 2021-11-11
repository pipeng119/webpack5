/**
 * webpack.config.js webpack的配置文件
 * 作用： 指示webpack干哪些活(当你运行webpack指令时，会加载里面的配置)
 * 
 * 所有的构建工具都是基于nodejs平台运行的——模块化默认采用commonjs
 * 
 */

const {
    resolve
} = require('path');
module.exports = {
    // 模式
    mode: 'development',
    // 入口起点
    entry: './src/index.js',
    // 输出路径
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    // loader的配置
    module: {
        rules: [
            // 详细的loader配置
            {
                // 匹配哪些文件
                test: /\.css$/,
                // user数组中loader的执行顺序是从下到上，从右至左
                use: [
                    // 创建style标签，并将js中的样式资源添加到html的head标签中生效
                    'style-loader', 
                    // 将css文件编程commonjs模块并加载到js中，里面内容是样式字符串
                    'css-loader']
            },{
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less编译成css
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins: [

    ]
}