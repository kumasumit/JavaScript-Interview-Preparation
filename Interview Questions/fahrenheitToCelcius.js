function Fahrenheit_to_Celsius(start , end , step){
		
    let currentFahrenhietValue = start;
    
    while(currentFahrenhietValue <= end){
        
        let celsiusValue = parseInt((5.0 / 9) * (currentFahrenhietValue - 32));
        console.log(currentFahrenhietValue , celsiusValue);
        currentFahrenhietValue += step;
        
    }

}

// Input/Output by Console
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
// input_stdin += data;
// });

// process.stdin.on('end', function () {
// input_stdin_array = input_stdin.split("\n");
// main();    
// });

// function readLine() {
// return input_stdin_array[input_currentline++];
// }


// function main() {


// var start =  parseInt(readLine());
// var end =  parseInt(readLine());
// var step =  parseInt(readLine());

// Fahrenheit_to_Celsius(start , end , step);
// }

console.log( Fahrenheit_to_Celsius(0, 100, 20));
//same code by for loop 

// function Fahrenheit_to_Celsius(start , end , step){
		
//     /* Write your code here
//    No need to specify return type 
//    Input is already taken care of, you have to print 
//    the output statements accordingly */
//    for(let f=start;f<=end; f +=step){
//        let c;
//        c = parseInt((f-32)*(5.0/9));
//        console.log(f+ " "+ c);
//    }

// }


































