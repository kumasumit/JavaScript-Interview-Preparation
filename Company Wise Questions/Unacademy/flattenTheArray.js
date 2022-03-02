//Write a program to flatten the array
let arr = [
    [1,2],
    [3,4],
    [6,7],
    [8,9]
]
// // console.log(...arr); [1,2] [3,4] [6,7] [8.9]
// console.log([].concat(...arr)); //[1,2,3,4,5,6,7,8,9]
// //Javascript built in method to flatten the array
// let arr1 = [23,45, [67,89]]; //...arr1 returns 23 45 [67,89]
// console.log([].concat(...arr1)); //returns [23, 45, 67, 89]
// let arr3 = [23, , 67];
// console.log(arr3.flat()); //.flat removes the empty element from the array.
//now we make our own flat funcion.

function customFlat(arr, depth=1){
    let result = [];
    arr.forEach((element) => {
        if(Array.isArray(element) && depth>0){
            result.push(...customFlat(element, depth-1));
        }else result.push(element);       
    });
    return result;
}
console.log(customFlat(arr));