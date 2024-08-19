"use strict";
//------------------FUNCTIONS:
//Functions are the primary means of passing data around in Typescript.
//TS allow us to specify the types of both input and output values.
//functions are reuseable means we use or call tthe function multiple times whenever or whereever we wants.
//There are 2 types of functions:
//              1-parameter         2-argument
//PARAMETERS are used in functions where we declare the function variable.
//ARGUMENTS are used where we call the functions.
//if we didin't give an argument to the function but it will run the code then its "STATIC TYPE FUNCTION"
//when the function is declared with parameters and arguments both it is called "DYNAMIC TYPE FUNCTION"
Object.defineProperty(exports, "__esModule", { value: true });
function students_names(names, roll_no) {
    console.log(`Hello ${names}! Your roll no  is ${roll_no}.`);
}
students_names("Ahmed", 1);
students_names("Ali", 2);
students_names("Hoorain", 3);
students_names("Zohaib", 4);
students_names("Waris", 5);
//---------------DEFAULT PARAMETER:
//when we assign values in parameters is called "default parameters"
function Exam_topics(topic1 = "variables", topic2, topic3) {
    console.log(`The exam topics are ${topic1}, ${topic2}, ${topic3}.`);
}
Exam_topics(undefined, "data types", "functions");
Exam_topics("if-else", "arithmetic operator", "logic operator");
//------------------FUNCTION USING ARITHMETIC OPERATOR:
function arithmetic_op(digit, digit2, digit3) {
    console.log(digit + digit2 - digit3);
}
arithmetic_op(12, 14, 2);
//------------------------RETURN STATEMENT:
function menu(dish1, dish2) {
    return `${dish1} ${dish2}`;
}
console.log(menu("biryani", "korma"));
console.log(menu("mango curry", "chocolate dessert"));
//----------------------ARROW FUNCTIONS:
//Arrow functions are extensively used with built-in JS function
let Country = () => {
    console.log(`My country name is PAKISTAN!`);
};
Country();
const PI_Value = (digit) => {
    return `${digit}`;
};
console.log(PI_Value(3.14));
//--------------Using IF-ELSE Statement in Arrow Functions:
const multiple = (digit) => {
    if (digit % 2 == 0) {
        console.log(`This is the multiple of 2`);
    }
    else {
        console.log(`This is not the multiple of 2`);
    }
};
multiple(6);
multiple(7);
//------------OPTIONAL PARAMETERS:
//Optional parameters are parameters that you can omit(leave) when calling a function. 
//They are denoted by appending a ? to the parameter name in the function’s signature.
function id(name, age) {
    console.log(`my name is ${name} and age is ${age}`);
}
id("ali");
id("ahmed", 27);
//-------------REST PARAMETERS:
//Rest parameters in TypeScript allow a function to accept an indefinite number of arguments as an array.
function team(player1, ...players) {
    return player1 + " " + players.join(" ");
}
console.log(team("ali", "ahmed", "zaid", "hammad", "wasif"));
