let arr = [10, 20, 30, 40, 50];
// delete element at index 1, output at [10, 30, 40, 50]
function solution(arr, n){
    return arr.filter((item,index)=>index!==n).join(' '); 
}

console.log(solution(arr, 1));