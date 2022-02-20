//scopes of var and let in loops
for(var i=0;i<10;i++){
    console.log(i+ " "); // it goes throgh the loop prints 0 to 9, 
    //at 9, it does i++, 9+1=10, and stores 10 in i 
}
console.log(i); //10 stored in i is printed., var has no block scope.
console.log("============================================");
let a = 4;
for(let a=0;a<10;a++){
    console.log(a); //0 to 9 for a is printed
}
console.log(a); //out of loop we get a from line 8, because let is
                //block scoped.  