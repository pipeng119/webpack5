# webpack 性能优化
* 开发环境性能优化
* 生产环境性能优化
  
## 开发环境性能优化
* 优化打包构建速度
* 优化代码调试
  
## 生产环境性能优化
* 优化打包构建速度
  
   1. 将只需要处理一次的`loader`放进`oneof`字段中，保证每个文件只被一个`loader`命中，不然每个`loader`都要跑一次.将需要不同的`loader`处理的文件的`loader`提取到与`oneof`同级
   2. 
      - `babel`缓存
      - 文件资源缓存 文件名添加hash值——每次webpack构建时，都会产生一个唯一的hash值（[name].[hash:20].js）
       
        问题：js和css同时使用一个hash值，如果重新打包，会导致所有缓存失效，如果只改动一个文件的话，也会使其他文件缓存失效.
        尝试解决的方法: 使用`chunkhash`. chunkhash是根据chunk生成的hash值.如果打包来源于同一个chunk,那么hash值就一样，反之，则不同。

        `chunk`指的是一个大的代码块，入口文件是`index.js`，在index.js中引入的css，他们都属于同一个`chunk`
         

        使用`contenthash`，根据文件的内容生成的hash值，不同的文件`hash`值一定不同
    3. 使用`tree shaking`

        前提

        - 必须使用es6模块化
        - 开启production模式构建
        - 作用: 减少build后的代码体积
        - 可能会产生的问题: 在`package.js`中添加`sideEffects:false` (所有代码都可以进行tree shaking)
        - 可能会把css、less、polyfill等文件干掉
        - 改成`sideEffects:['*.css','*.less']` 
* 优化代码运行的性能