//GLOBAL AND BLOCK SCOPE VARIABLES:
//Global scope variables can be access from anywhere without any limits.
//Block scope variables accessation has limits.

let Teacher: string = "Ali"               //Global scope
console.log(Teacher);

function Class1() {
    let Total_students: number = 26                               //Block scope
    console.log(`Total ${Total_students} are in the class of Sir ${Teacher}`);
}
Class1();

function Class2() {
    let present_students: number = 24
    console.log(`${present_students} are present in Sir ${Teacher} class.`);
}
Class2();