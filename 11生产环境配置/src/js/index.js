import '../css/index.css';
import '../css/a.less';

function add(x, y) {
    return x + y;
}

console.log(add(1, 2));

const ary = [1, 2, 3, 4];

let ary1 = [...ary];

let flag = ary1.includes(3);

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000);
})

p1.then(res => {
    console.log('res', res);
})