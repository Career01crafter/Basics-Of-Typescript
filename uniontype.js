"use strict";
//---------------UNION TYPE LITERALS:
//Union type literals are used when a value can be more than a single type. 
//Such as: when a property would be a string, a number or a boolean.
//--SYNTAX:     string | number | boolean
//Using vertical bar between data types means that parameter would be string , number , boolean.
Object.defineProperty(exports, "__esModule", { value: true });
let myName;
myName = null;
console.log(myName);
function data(name, age) {
    console.log(name, age);
}
data("ali", 25);
data("ahmed", "28");
let groceryList = {
    vegetables: "per 1 kg",
    fruits: "per 1 kg",
    sugar: 5,
    flour: "7 kg",
    salt: "half kg"
};
console.log(groceryList);
