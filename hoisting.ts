//------------HOISTING:
//Hoisting refers to the behavior of moving variable declarations to the top of their scope,
//regardless of where they are actually declared.
//This means that variables are moved to the top of their scope,but their assignment remains at same place.

//ERROR: Variable 'x' is used before being assigned.ts(2454)
// var x: number

// console.log(x);
// var x = 10


var y;
console.log(y);
y = 15