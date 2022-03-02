const arr = [1,2,3];
const arrForEach = arr.forEach((item, index)=>arr[index] = item +3)
console.log(arr); //returns [4, 5, 6]
console.log(arrForEach); //returns undefined
//for each does not return anything, 
//it is only used to traverse the array or object
//any change forEach does changes the original Array.
