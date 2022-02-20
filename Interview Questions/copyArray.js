//gien an array of integers copy the elements of the array 
//into another array of same size
//input arr 123
//output arr 123
//How to take array input
// function main(){
//     var a = parseInt(readLine()); //reads from readline console and converts it into Number
//     var arr = readLine().split(" ").map(Number);
//     //reads an array from console and converts it into integer array
// } 
function copy(arr){
    let arr1 = [...arr]
    return arr1;
}
const arr = [1,2,4];
console.log(copy(arr));