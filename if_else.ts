//IF statement specify a block of code to be executed if it is true.
//ELSE-IF statement will execute the code if first statement(IF) is false.
//ELSE statement execute the code when both statements(IF AND ELSE-IF) is false.

//Code with IF statement is true:
let islamic_country = "Pakistan"
let my_country = "Pakistan"
if(islamic_country === my_country) {
    console.log(`I love my country Pakistan!`);
} 

//Code with ELSE-IF statement is true:
let digit = 12
let digit2 = 10
if(digit < digit2) {
    console.log("Great");               //false
} else if(digit > digit2) {
    console.log("Amazing");             //true
}

//Code with ELSE statement is true:
let value: string = "Apple"
let value2: string = "Mango"
if(value === value2) {
    console.log("Error");                //false
} else {
    console.log("Mix shake of apple and mango!");       //true
}

//NESTED IF STATEMENT:
//JS allows us to nest if statements within if statements.
//Means we can place if statement inside another if statement.

let visa_country = "Greece"
let age = 19
if(visa_country === "Greece") {
    if(age < 18) {
        console.log("Age Restriction!");
    } else if(age >= 18 && age <= 50) {
         console.log("You can proceed for fruther details!");
    } else {
        console.log("Please proceed with your medical certificates!");
    }
} else {
    console.log("Invalid country visa!");
}