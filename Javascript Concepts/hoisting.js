//hoisting is a concept where all varibale and 
//function declarations are moved to top of the scope chain.
// 1. hoisting in Var
console.log(temp);
//logs undefined
var temp = "Kumar Sumit"
console.log(temp);
//logs Kumar Sumit
//this is how js runs this code by hoisting
//it moves all variable and function declarations to 
//the top of scope chain.
//1.var temp;
//2.console.log(temp); //logs undefined
//3.temp = "Kumar Sumit", passes the value Kumar Sumit into temp.
//4.console.log(temp); logs Kumar Sumit stored in temp variable
console.log("========================================");

// 2. Hoisting in let, const
// console.log(temp1);
// ReferenceError: Cannot access 'temp1' before initialization
let temp1="sumit";
console.log(temp1);
//let, const variables are also hoisted, but they are
//present in temporal dead zone.
//meaning we cant access them, until and unless they are initialized
//how code runs in Js engine
//1.let temp1;
//2.console.log(temp1); //logs reference error cant access temp1 before initialization
//temp1 is a let varibale which is in temporal dead zone, so js engine cant read its value
//3.temp1 = "Sumit", passes the value Sumit into temp1.
//4.console.log(temp1); logs Sumit stored in temp1 variable
console.log("======================================================");