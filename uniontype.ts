//---------------UNION TYPE LITERALS:
//Union type literals are used when a value can be more than a single type. 
//Such as: when a property would be a string, a number or a boolean.
//--SYNTAX:     string | number | boolean
//Using vertical bar between data types means that parameter would be string , number , boolean.

let myName : string | null
myName = null
console.log(myName);


function data(name : string, age : number | string) {
    console.log(name , age);
}
data("ali" , 25);
data("ahmed" , "28");


//-------WITH TYPE INFERENCE / ALIASED:
type groceryList = {
    vegetables : string,
    fruits : string,
    sugar : string | number,
    flour : string,
    salt : string
}

let groceryList = {
    vegetables : "per 1 kg",
    fruits : "per 1 kg",
    sugar : 5,
    flour : "7 kg",
    salt : "half kg"
}
console.log(groceryList);