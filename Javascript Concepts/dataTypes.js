//We have mainly two types of data types in javascript.
//Primitie and Non Primitive Data Types
//Primitive Data Types are Number, Boolean, String, Null, Undefined and Symbols
//Non primitive Data types are Objects, Arrays.
//In javascript Arrays are part of Object Prototype.
//In Javascript the code flows from top to bottom and from 
//left to right.
//Example
// 1.Code execution flows from left to right
let temp = 5+6+"sumit";
console.log(temp); //logs '11sumit' , it adds 5 and 6 in 11 and then 11 and sumit are concatenated
temp = "sumit"+5+6;
console.log(temp);  //logs 'sumit56' it converts all in string type
console.log("===================================================================")
//2. Js is a dynamically typed language, it is a loosely type language.
//it means you dont mention the type of variable,
//like int a = 6, int b = bool, here a is int type, b is bool type.
//but in js variables dont have a type.
let a = 5; //here a is Number type
a = "sumit" // now a is String type
a = true; //now a is boolean type.
//this cant be done in strongly typed languaes like C,C++ or Java.

// 3. Type of Operator
console.log(typeof(NaN), typeof(+Infinity), typeof(-Infinity));
//all three have number type, NaN is of type number in Js
console.log(typeof(null), typeof([1,2,3]), typeof({name:"sumit"}));
//typeof null and array is both objects, 
//because both objects, arrays are of type Object. In js, there is no array type.
console.log("===================================================================");

//4.Exercises
console.log(2+5+"3", typeof(100), typeof(typeof(100)));
console.log(typeof(100)); //logs number
console.log(typeof(typeof(100))); //number is a string, typeof(number) is string. 
console.log("===================================================================");

//5. Implicit Type Coercion, Automatic Type Conversion
let x = "10";
let y = "2";
let z = x*y;
console.log(z); //logs 20
//implicit type coercion, converts '10' and '2' to number type;
z = x/y;
console.log(z) //logs 5
//implicit type coercion, converts '10' and '2' to number type;
console.log(x+y," " ,x-y); //logs 102//appens 10 and 2 as string,
//and 8
//implicit type coercion, converts '10' and '2' to number type;
console.log("===================================================================");




