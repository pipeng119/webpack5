console.log('index.js文件被加载了');


// import {
//     add
// } from './test';

document.getElementById('btn').onclick = () => {
    // import语法: 懒加载，触发时候才被加载
    // prefetch: 预加载，浏览器空闲的时候才加载
    import(/* webpackChunkName: 'testhaha',webpackPrefetch: true*/'./test').then(({
        add
    }) => {
        add();
    })
}