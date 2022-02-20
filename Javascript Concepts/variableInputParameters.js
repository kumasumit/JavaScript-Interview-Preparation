//how to take varibale input in js 
//here in this function sum, we add 3 numbers.
function addAtleastThreeNumbers(a,b,c, ...numbers){
    let sum = a+b+c;
    for(let i=0; i<numbers.length;i++){
       sum += numbers[i];
    }
    return sum;
}
console.log(addAtleastThreeNumbers(10,20,30,90,100));
//here a=10, b=20, c=30, numbers = 90, 100
