"use strict";
function fib() {
    const fibArray = [0, 1];
    for (let i = 2; i < 50; i++) {
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
    }
    return fibArray;
}
console.log(fib());
function numsToStrings(arr) {
    arr.map(item => item.toString());
    return arr;
}
console.log(numsToStrings(fib()));
function numEvenNums(arr) {
    let evens = 0;
    arr.forEach(item => { if (item % 2 === 0)
        evens++; });
    return evens;
}
console.log(numEvenNums(fib()));
