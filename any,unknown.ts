//-------------ANY:
//TypeScript also has a special type any.
//That you can use ANY whenever you don’t want a particular value to cause typechecking errors.

let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK

//----------------UNKNOWN:
//When a variable is assigned the type `unknown`,it means that the type of that variable is not known at compile time. 
//This forces developers to perform type checks before operating on values of type `unknown`, ensuring type safety. 
//Unlike `any`, which allows any type of value to be assigned, 
//`unknown` requires explicit type checking or type assertion before using the value. 
//This helps in preventing unexpected runtime errors by enforcing stricter type rules.

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK

// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
//const val3: boolean = val; // Will throw error
//const val4: number = val; // Will throw error
//const val5: string = val; // Will throw error
//const val6: Record<string, any> = val; // Will throw error
//const val7: any[] = val; // Will throw error
//const val8: (...args: any[]) => void = val; // Will throw error

//--------------NEVER:
//In TypeScript, the `never` type represents values that never occur. 
//It is used to indicate functions that never return a value or variables that cannot have any value.

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}