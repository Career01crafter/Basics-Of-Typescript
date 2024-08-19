"use strict";
//----------------ENUMS:
//In TypeScript,an enum (enumeration) is a special data type that allows you to define a set of named constants. 
//It helps you manage and work with a collection of related values in a more readable and maintainable way.
Object.defineProperty(exports, "__esModule", { value: true });
var color;
(function (color) {
    color["red"] = "Red";
    color["blue"] = "Blue";
    color["green"] = "Green";
})(color || (color = {}));
console.log(color.green);
console.log(color["blue"]);
const getCurrentYear = () => new Date().getFullYear();
var today;
(function (today) {
    today[today["current"] = getCurrentYear()] = "current";
    today[today["next"] = today.current + 1] = "next";
})(today || (today = {}));
console.log(today.current);
const getTodayDate = () => new Date().getDate();
var Today;
(function (Today) {
    Today[Today["atTime"] = getTodayDate()] = "atTime";
})(Today || (Today = {}));
console.log(Today.atTime);
let move = 3 /* Direction.Left */;
console.log(move);
