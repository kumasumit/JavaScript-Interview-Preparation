//Given a number print sum of even and odd digits of the number
//input 1234, first evenSum = 2+4=6 , oddSum = 1+3 = 4
//output 6 4 separated by space
function evenOddDigitSum(number){
    let evenSum = 0;
    let oddSum = 0;
    let digitValue=0;
    while(number>0){
        digitValue = number%10;
        if(digitValue%2===0){
            evenSum += digitValue;
        }else{
            oddSum += digitValue;
        }
        number = Math.floor(number / 10);
        //we can also use number = parseInt(number/10);
    }
    return {evenSum, oddSum}; //returns in form of object
    // return new Array[evenSum, oddSum]; //this returns in form of array.

}
console.log(evenOddDigitSum(1234));