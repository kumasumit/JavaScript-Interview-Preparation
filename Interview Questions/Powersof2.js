//input arr [1, 3, 8]
//output arr [1, 0, 1] 1, id element is power of 2, 
//0 if it is not
const arr = [1, 3, 8, 9, 16]
//output: [1,0,1,0,1];

function isPower(arr) {
    // Write your code here
    function isPowerOfTwo(n) {
        if (n == 1)
            return true;

        // all other odd numbers are
        // not powers of 2
        else if (n % 2 != 0 ||
            n == 0)
            return false;

        // recursive function call
        return isPowerOfTwo(n / 2);
    }
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPowerOfTwo(arr[i])) {
            out.push(1);
        }
        else {
            out.push(0);
        }
    }
    return out;

}
console.log(isPower(arr));
