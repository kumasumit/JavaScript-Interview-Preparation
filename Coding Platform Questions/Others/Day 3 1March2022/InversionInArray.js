//given an array calculate the no of inversions in the array
//Given an array of integers, find the number of inversions in it. Inversion Count for an array indicates – how far (or close) the array is from being sorted. If an array is already sorted then inversion count is 0. If an array is sorted in reverse order that inversion count is the maximum.
/*
Formally speaking, two elements a[i] and a[j] form 
an inversion if a[i] > a[j] and i < j.
Input:
    5
    2 4 1 3 5
    where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Output:
    3
Explanation: The given array { 2, 4, 1, 3, 5 } has 3 
inversions ( 2, 1 ), ( 4, 1 ), ( 4, 3 ).
Hence the output 3.
*/

// //main function
// function main(){
//     var a = parseInt(readLine());
//     var arr = readLine().split(" ").map(Number);
//     var res = solution(arr);
//     console.log(res);
// }

let arr = [2, 4, 1, 3, 5] //expected output 3
function solution(arr){
    let count = 0;
    let n = arr.length;
    for(let i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                count++;
            }
        }
    }
    return count;

}
console.log(solution(arr)); //expected 3 