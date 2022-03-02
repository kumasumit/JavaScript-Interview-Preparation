//given an array calculate the absolute difference between first and last
//element of the array.
let arr = [-1,2,3,-4];
//output: 3
function solution(arr){
    let lastIndex = arr.length-1;
    let firstIndex = 0;
    return Math.abs(arr[lastIndex]-arr[firstIndex]);
}
console.log(solution(arr));