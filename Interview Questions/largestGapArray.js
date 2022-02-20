// Input : arr = {3, 10, 6, 7}
// Output : 7
// Explanation :
// Here, we can see largest gap can be
// found between 3 and 10 which is 7
// Input : arr = {-3, -1, 6, 7, 0}
// Output : 10
// Explanation :
// Here, we can see largest gap can be 
// found between -3 and 7 which is 10 
//we can solve this by two if loops which will take 0(n2) time
//we will write a program to do it in 0(N) time
function largestGapArray(array, length){
    let minimumValue = array[0];
    let maximumValue = array[0];
    for(let i=0;i<length;i++){
        if(array[i]>maximumValue){
            maximumValue = array[i];
        }
        else if(array[i]<minimumValue){
            minimumValue = array[i];
        }
    }
    //this for loop calculates the maximum and minimum integer values in an integer array
    return Math.abs(maximumValue-minimumValue);
}

const arr = [-3, 6, 7, -10];
console.log(largestGapArray(arr, 4));