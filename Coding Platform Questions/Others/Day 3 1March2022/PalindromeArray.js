//check whether an arary is palindrome or not
/*
Check whether the array is palindromic or not
Given an array of integers, find whether it is Palindromic or not. Display "Yes" if the array is palindromic otherwise display "No".
An array is Palindromic only when read in reverse order gives the same result as in normal order.
Input:
    5
    3 6 0 6 3
    where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Output:
    Yes
Explanation: Normal order reading of elements: 3 6 0 6 3
Reverse order reading of elements: 3 6 0 6 3, 
as both the orders are same, the array is Palindromic, 
hence the output "Yes".
*/

// //main function
// function main(){
//     var a = parseInt(readLine());
//     var arr = readLine().split(" ").map(Number);
//     var res = solution(arr);
//     console.log(res);
// }
//output only Yes, No.

let arr = [3, 6, 0, 6, 3]; //expected output Yes
function solution(arr) {
    let isPalindrome = "Yes";
    let reversedArray = [];
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    // console.log(reversedArray)
    for(let i=0;i<n;i++){
        if(arr[i]!==reversedArray[i]){
            isPalindrome = "No";
            break;
        }
    }
    return isPalindrome;
}
console.log(solution(arr)); //returns Yes because it is palindrome.
