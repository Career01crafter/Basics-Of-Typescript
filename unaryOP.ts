//Unary Operator add(++) or subtract(--) values from giving number.
//(variable must be in number type for using unary operator.)

let value1: number = 32
console.log(--value1);                         //it subtract 1 value (answer: 31)
console.log(value1);                           //print subtracted value 31
console.log(--value1);                         //it subtract again 1 value from 31 (answer: 30)
console.log(value1);                           //print subtracted value 30

let value2: number = 24
console.log(++value2);                         //it add 1 value (answer: 25)
console.log(value2);                           //print added value 25
console.log(++value2);                         //it add again 1 value in 25 (answer: 26)
console.log(value2);                           //print added value 26


//Error using unary operator with string:
// let myname: string = "ali"
// console.log(++myname);
//ERROR: An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type.