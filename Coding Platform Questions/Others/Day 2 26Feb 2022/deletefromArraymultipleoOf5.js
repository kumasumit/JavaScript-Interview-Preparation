let arr = [2, 3, 4, 10, 22, 320];

function solution(arr){
    return arr.filter(item=>item%5!==0).join(' ');
}
console.log(solution(arr)); //output 2 3 4 11 22 remove multiples of 5

//code to take input in online editor
// var a = parseInt(readLine());
// var arr = readLine().split(' ').map(Number);
// var res = solution(arr);
// console.log(res);