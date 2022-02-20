//write and implement how to memoize functions in javascript
function longProduct(num1, num2) {
    for (let i = 0; i < 1000000; i++) {

    } //this runs the loop for 10lakh or 1 million times.   
    return num1 * num2;
}
//now lets memoize this function
function myMemoize(fn, context) {
    const result = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);

        if (!result[argsCache]) {
            result[argsCache] = fn.call(context || this, ...args);

        }
        return result[argsCache];
    }
}
//now lets memoize the function
const memoizedLongProduct = myMemoize(longProduct);
//now lets check the time again
console.time("First call");
console.log(memoizedLongProduct(3456, 5678));
console.timeEnd("First call");
console.log("======================================");
console.time("Second call");
console.log(memoizedLongProduct(3456, 5678));
console.timeEnd("Second call");