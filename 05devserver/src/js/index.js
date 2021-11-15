import '../css/a.less'
import '../css/b.less'


export var name = 'Rainbow'

const add = (x, y) => {
    return x + y
}
const ary = [1, 2, 3];

console.log(add(1, 3));

const esits = ary.includes(1);
console.log('esits: ', esits);

console.log([...ary]);