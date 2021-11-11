/**
 * 
 * 1. 运行指令:
 *  开发环境: webpack ./src/index.js -o ./build/buildt.js --mode=development
 */


function add(x, y) {
    return x + y;
}

function test(){
    console.log('testing~~~~~~')
}

let result = add(1, 2);
console.log('result: ', result);
console.log(test());