//Given an integer, if it is prime return 1 
//if it is not prime, return smallest divisor grater than 1.
/*
 * Complete the 'isPrime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */
//input 24 , output : 2
//input 2, output : 1


function isPrime(n) {
    // Write your code here
    let isPrime= true
    for(let i =2;i*i<=n;i++){
        if(n%i===0){
            isPrime=false;
            return i;
            
        }
    }
    return 1;

}
console.log(isPrime(24));