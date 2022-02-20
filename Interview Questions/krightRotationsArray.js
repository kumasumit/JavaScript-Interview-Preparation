//Given an input array return an array after r right rotations
function rotateRight(arr, rotations){
    let arr1 = [...arr];
    if(rotations<=0){
        return arr1;
    }
    
    for(let i = 0;i<rotations;i++){
        let element = arr1.pop(); //pops the last element from array and stores it in element variable.
        arr1.unshift(element); //inserts the last popeed element to the start of the array.
    }

    return arr1;

}
// const arr = [12, 34, 45, 56];
// const arr1 = [...arr];
// arr1.push(89);
// console.log(arr1, arr);
const arr = [2,3,4,5] 
// after 1 right rotation it becomes [5, 2,3,4]
console.log(rotateRight(arr, 0)); //logs the same array
console.log(rotateRight(arr, -1)); //logs the same array
console.log(rotateRight(arr, 1)); //logs [5,2,3,4]
console.log(rotateRight(arr, 2)); //logs [4,5,2,3]
console.log(rotateRight(arr, 3)); //logs [3,4,5,2]
