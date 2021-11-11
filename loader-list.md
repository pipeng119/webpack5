## loader使用 

- 下载
- 配置

1. style-loader 创建style标签，并将js中的样式资源添加到html的head标签中生效
2. css-loader 将css文件编程commonjs模块并加载到js中，里面内容是样式字符串
3. less-loader 将less编译成css
4. scss-loader 将scss编译成css
4. MiniCssExtractPlugin.loader 将css代码提取成单独的css文件，配合MiniCssExtractPlugin一起使用
4. postcss-loader 可以处理css兼容性问题
4. babel-loader js兼容性处理