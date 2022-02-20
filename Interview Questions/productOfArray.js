//write a program for calculating the product
//of all elements of the array
// 
function solution(arr){
    let mul = 1;
    for(let i=0;i<arr.length;i++){
      mul *= arr[i];
    }
    return mul;
}

const arr = [1,2,3,4,5,6];
console.log(solution(arr));