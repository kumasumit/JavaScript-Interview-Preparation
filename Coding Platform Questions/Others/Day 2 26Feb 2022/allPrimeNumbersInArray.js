let arr = [2, 3, 5, 7, 9];
function solution(arr){
    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        isPrime = true;
        for(div = 2;div*div<=arr[i];div++)
        {
            if(arr[i]%div===0){
                isPrime = false;
                break; //breaks out of inner for loop.
            }
        }
        if(isPrime){
            arr1.push(arr[i]);
        }
    }
    return arr1.join(' ');
}

console.log(solution(arr)); //expected out 2 3 5 7
console.log(arr);