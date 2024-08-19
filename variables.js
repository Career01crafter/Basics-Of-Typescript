"use strict";
//variables must be vary and contain unique names. In simple words variables is a name of storage location.
//At first we declare variables with "let, var, const".
//Naming convention of variables are mostly in camelCase or Camel_Case.
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.WholeNumbers = void 0;
//variable using var:
var my_name = "ali";
console.log(my_name);
var my_name = "ahmed";
console.log(my_name);
//with var variable we use names more then one time without any error.Var uses before updation in typescript.
//variable using let:
//using export syntax on it:
exports.WholeNumbers = "0 to infinity";
// let WholeNumbers = "0 to infinity"
// console.log(WholeNumbers);                      //shows error
//we can't use names more then one time with let variable.
//variable using const:
const Pie_Value = 3.14;
console.log(Pie_Value);
// const Pie_Value = 3.14
// console.log(Pie_Value);                        //shows error
//const only uses when there is values we have to take as constant.
function data(name, age, qualification) {
    console.log(name, age, qualification);
}
exports.data = data;
