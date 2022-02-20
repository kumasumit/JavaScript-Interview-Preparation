//Given a number return the factorial of the number
function factorial(number){
    let result = 1
    if(number < 0){
        return "Error";
    }
    if(number ===0 && number ===1){
        return result;
    }
    
    while(number>0){
        result *= number; //result is result=result*number;
        --number; //number is number - 1
    }
    return result;
}
console.log(factorial(5));
