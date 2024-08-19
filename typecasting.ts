//---------------EXPLICIT CASTING:
//There are times when working with types where it's necessary to override the type of a variable, 
//such as when incorrect types are provided by a library.
//Casting is the process of overriding a type.

//------------CASTING WITH AS:
//A straightforward way to cast a variable is using the as keyword, 
//which will directly change the type of the given variable.

let value : unknown = "4"
console.log(value as number);
console.log((value as string).length);

//--------------------CASTING WITH <>:
//Using <> works the same as casting with as.

let myName = "ahmed ali"
console.log((<string>myName).length);

let digit = 5
console.log(<number>digit);