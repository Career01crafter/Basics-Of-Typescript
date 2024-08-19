//----------CONST:
//we use const where variable values do not change
const a = 5;
const b : number = 33;
const c ="best";

//------------VAR:
//var mostly used in old versions of TS.After updatation of TS use of var becomes less because it is globalscope.
var value = 23
console.log(value);

var value = 45
console.log(value);

//-------------LET:
//let is now mostly suggested because it is block scope. it contain limitations.
let Name = "david"
console.log(Name);

// let Name = "jason"
// console.log(Name);
//ERROR:  
//Cannot redeclare block-scoped variable 'Name'.ts(2451)
// let Name: string




