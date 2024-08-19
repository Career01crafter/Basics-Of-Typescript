//Logical Operators are used to combine multiple conditions in one
//These are &&(AND operator) ,,, ||(OR operator) ,,, !(NOT EQUALS TO operator)

let digit: number = 10
let digit2: number = 7
console.log(digit >= 9 && digit2 <= 9);//&& operator:if both is true it will run otherwise false
console.log(digit <= 9 || digit2 <= 9);//|| operator:if one of them is ture it will run true otherwise false
console.log(digit != 11);//! operator:if condition is not equals to it will run true
console.log(digit2 !=7);//! operator: false

let v = 5
console.log(v >= 5 && v <= 5); //true
console.log(v > 5 && v < 5);  //false
console.log(v >=5 || v <= 5); //true
console.log(v > 5 || v < 5);  //false
console.log(!(v < 10));   //false
console.log(!(v > 10));  //true

