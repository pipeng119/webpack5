function sum(...args) {
    return args.reduce((c, n) => c + n, 0)
}

console.log(sum(1,2,3,4,5))