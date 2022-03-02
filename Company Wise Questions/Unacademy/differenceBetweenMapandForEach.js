//explain the difference between map and forEach
//both are new functions introduced in javascript ES6.
let arr = [1, 2, 3, 5, 6 ];
const arrMap = arr.map(item=>item*2); 
//map returns a new array after doing the operations
//map does not change the original array
console.log(arrMap, arr);
const arrForEach = arr.forEach(item=>item+3);
console.log(arrForEach, arr);
//output: [ 2, 4, 6, 10, 12 ] [ 1, 2, 3, 5, 6 ]
//undefined [ 1, 2, 3, 5, 6 ]
//forEach is only used to traverse through each elements of the array.
//it does not return anything.
//forEach changes the original Array. 
//1. first difference:
// The main difference between map and forEach is that 
// the map method returns a new array by applying the callback
// function on each element of an array, while the 
// forEach method doesn’t return anything.
// //2. second difference
// On the other hand, the map method is used for 
// creating a new array, and thus, it’s chainable.
// You can call a number of map operations one after the other 
// The forEach method doesn’t return anything,
// so you can’t chain it with any other methods
// it’s not chainable.
const myAwesomeArray = [
    { id: 1, name: "Kumar" },
    { id: 2, name: "Sumit" },
    { id: 3, name: "Rahul" },
  ]
  
myAwesomeArray.forEach(element => console.log(element.name))

// Like map , the forEach() method receives a function
// as an argument 
// and executes it once for each array element. However,
// instead of returning a new array like map,
// it returns undefined.
// 1. The returning value
// The first difference between map() and forEach()
// is the returning value.
// The forEach() method returns undefined and map() returns a new array
// with the transformed elements. Even if they do the same job,
// the returning value remains different.
const myAwesomeArray1 = [1, 2, 3, 4, 5]
myAwesomeArray1.forEach(x => x * x)
//>>>>>>>>>>>>>return value: undefined

myAwesomeArray1.map(x => x * x)
//>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]

//3. Mutability
// forEach() does not mutate the array on which it is called. (However, callback may do so).

// map() does not mutate the array on which it is called (although callback, if invoked, may do so)
//how to change original array by forEach
let arr3 = [1,3,467,789];
const forEachResult = arr3.forEach((item, index)=>arr3[index] = item+3);
console.log(arr3); 
// [ 4, 6, 470, 792 ] it changes item by 3 but 
console.log(forEachResult); //returns undefined
//foreach does not return anything, it is not chainable. 