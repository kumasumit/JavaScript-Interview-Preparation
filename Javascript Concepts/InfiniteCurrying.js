//create a infinite currying function in javascript
//in this function, you can go on adding more parameters. 
function add(a){
    return function (b){
        if(b){  //it checks if b is empty, if it is empty it goes out of if and returns a, 
               //if b is there, add(a+b) is returned. 
            return add(a+b) 
        }
        return a;
    }
}

console.log(add(4)(2)(9)(10)()); //you can go on adding parameters in the chain. 