//-------------TERNARY OPERATOR:
//In TypeScript, the ternary operator is a shorthand way of performing a conditional check. 
//It's similar to what you'd find in other programming languages like JavaScript.
//The ternary operator takes three operands and is used to evaluate a condition, 
//then return one of two values based on the result of that condition. The general syntax is:
//                       condition ? expression1 : expression2
// condition: This is a boolean expression that is evaluated.
// expression1: This value is returned if the condition evaluates to true.
// expression2: This value is returned if the condition evaluates to false.
var isValid = true;
var message = isValid ? "valid" : "invalid";
console.log(message);
var exam = false;
var result = exam ? "passed" : "failed";
console.log(result);
var a = 10;
var b = 5;
var c = (a > b ? "a is greater than b" : "a is not greater than b");
console.log(c);
