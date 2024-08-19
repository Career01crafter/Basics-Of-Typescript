"use strict";
//-------------TUPLES:
//A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.
//To define a tuple, specify the type of each element in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let values = [25, "ahmed", true];
console.log(values);
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
//--------WITH OPTIONAL:
let arr = ["abcd", 41];
console.log(arr);
arr = ["xyz", 23, false];
console.log(arr);
//----------WITH REST ELEMENTS:
let portal_user = [5, "ali", "ahmed", "jawad", "hammad", "nabeel"];
let message = "You can proceed!";
console.log(portal_user[0]);
console.log(portal_user[1] + " " + message);
console.log(portal_user[2] + " " + message);
console.log(portal_user[3] + " " + message);
console.log(portal_user[4] + " " + message);
console.log(portal_user[5] + " " + message);
