import $ from 'jquery';
const data = {
    "C端": ["C端心理学", "C端心理学1"],
    "兰心": ["读书变现二转", "读书变现一转"],
    // "星流音乐": ["星流音乐一转", "星流音乐二转"],
    // "梧桐": ["梧桐声音训练营"],
    // "梨花": ["拆书变现赵冰一转", "拆书变现师北宸一转", "梨花声音变现一转", "拆书变现二转", "梨花声音变现二转", "拆书变现筝小钱一转"]
};

const keys = Object.keys(data);
const res = [];
keys.forEach(item =>
    data[item].forEach(val =>
        res.push(item + '-' + item)
    ));
console.log(res)

console.log($)