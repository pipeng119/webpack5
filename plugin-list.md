## Plugin使用

- 下载
- 引用
- 配置

1. html-webpack-plugin 

   - 默认创建一个空的html文件

   - 自动引入打包输出所有资源(JS/CSS)

     

     

     ```js
     new HtmlWebpackPlugin({
         template: './src/index.html'
     })
     ```

2. mini-css-extract-plugin

   -  提取css为单独的文件

     

     

     ```js
     new MiniCssExtractPlugin({
         filename: 'css/index.[hash:10].css'
     })
     ```

3. optimize-css-assets-webpack-plugin 

   - 压缩css文件，降低css文件体积

     ```js
     new OptimizeCssAssetsWebpackPlugin()
     ```

4. eslint-webpack-plugin

   - 统一`js`代码格式

   - 可以在package.json中配置eslintConfig或者单独创建文件.eslintrc.js用于插件读取eslint的配置

   - /* eslint-disable-next-lint */ 忽略eslint语法

     ```js
     new EslintWebpackPlugin(options)
     ```

