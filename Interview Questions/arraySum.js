/*
 * Complete the 'arraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
*/
const numbers = [4, 3, 5];
function arraySum(numbers) {
    // Write your code here
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    return sum;

}
console.log(arraySum(numbers));