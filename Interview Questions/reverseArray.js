//Reverse a array in its place by using index and loop and 
//not in built functions
/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
*/
function reverseArray(arr) {
    // Write your code here
    let outArray = [];
    for (let index = arr.length-1;index>=0;index--){
      outArray.push(arr[index]);
    }
    return outArray;

}
const arr = [1,2,3,4,5]
const result = reverseArray(arr);

console.log(result.join('\n') + '\n');
