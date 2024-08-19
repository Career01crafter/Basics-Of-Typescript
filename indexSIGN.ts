//--------------INDEX SIGNATURE:
//It is a way to define a property that can be accessed using a dynamic key.
//It's a way to tell TS that an object can have properties with arbitrary names.
//SYNTAX:
interface MyObject {
    [key: string]: number;
}

//-----Example:
interface UserAges {
    [username: string]: number; // Each property key is a string, and its value is a number
}

const ages: UserAges = {
    alice: 30,
    bob: 25,
    carol: 27,
};

// Accessing the values
console.log(ages.alice); // Output: 30
console.log(ages["bob"]); // Output: 25

// Adding new properties
ages.dave = 40;
console.log(ages.dave); // Output: 40
