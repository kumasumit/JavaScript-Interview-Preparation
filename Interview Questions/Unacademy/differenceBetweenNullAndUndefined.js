//difference between null and undefined
var a = null;
var b = undefined;
console.log(typeof(a)); //returns object.
console.log(typeof(b)); //returns undefined.
console.log(null==undefined);  //returns true as it checks only content not type.
console.log(null===undefined); //returns false as it checks both content and type.