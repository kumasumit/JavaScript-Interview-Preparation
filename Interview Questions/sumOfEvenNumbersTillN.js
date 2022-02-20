//given a number n , write a function to find sum of all even numbers 
//from 1 to N, N included.
function sum(n){
        
    /* Write your code here
  No need to specify return type 
  Input and output already taken care of, you have to just return the output variable */
  let sum = 0;
  for(let i=1;i<=n;i++){
      if(i%2===0){
          sum +=i;            
      }
  }
  return sum;
}

console.log(sum(10)); //2+4+6+8+10=30
console.log(sum(6)); //2+4+6=12.

