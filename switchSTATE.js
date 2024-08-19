//-------------SWITCH STATEMENT:
//In TS, a switch statement is used to execute different blocks of code based on the value of an expression. 
//It's similar to the switch statement in JS and is useful when you need to perform different actions,
// based on multiple possible values of a variable.Here's the general syntax for a switch statement in TypeScript:
// switch (expression) {
//     case value1:
//         // Code to execute if expression === value1
//         break;
//     case value2:
//         // Code to execute if expression === value2
//         break;
//     // Additional cases as needed
//     default:
//         // Code to execute if expression does not match any case
//         break;
// }
var day = 3; // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
