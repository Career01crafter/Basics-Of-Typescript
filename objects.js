"use strict";
//-----------------OBJECTS:
//An object in TypeScript is an instance that contains a set of key-value pairs.
//These pairs can hold various data types, including scalar values, functions, or even arrays of other objects.
//Objects are variables too. But objects can contain many values.
Object.defineProperty(exports, "__esModule", { value: true });
let country = {
    country_name: "PAKISTAN",
    capital: "Islamabad"
};
console.log(country);
let Teacher = {
    name: "ahmed",
    experience: "5 years"
};
console.log(Teacher);
console.log(Teacher.name);
console.log(Teacher["experience"]);
let data = {
    name: "ali",
    age: 29,
    qualification: "masters"
};
console.log(data);
let Student = {
    name: "hammad",
    age: 27
};
console.log(Student);
console.log(Student.age);
console.log(Student.name);
//------------ANONYMOUS;
let abc = {
    num: "23",
    num2: 2
};
console.log(abc);
console.log(abc.num);
console.log(abc.num2);
let storeManager = {
    name: "Bilal",
    subordiates: 4
};
console.log(storeManager);
console.log(storeManager.subordiates);
let examDetails = {
    day: "wednesday",
    timings: 5.00
};
console.log(examDetails);
console.log(examDetails.day);
console.log(examDetails.timings);
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
ball = sphere;
sphere = ball;
let tube = { diameter: 10, lenght: 3 };
//tube = ball        ERROR
//ERROR: Property 'lenght' is missing in type 'Ball' but required in type 'Tube'.ts(2741)
//objects.ts(107, 5): 'lenght' is declared here.
ball = tube;
const myBook = {
    Author: {
        firstName: "Faisal",
        lastName: "khan"
    },
    book_name: "Journey of Typescript"
};
console.log(myBook);
console.log(myBook.Author);
console.log(myBook.book_name);
const MyClass = {
    Student1: {
        name: "wasif",
        roll_no: 1
    },
    Student2: {
        name: "jawwad",
        roll_no: 2
    },
    Student3: {
        name: "zahid",
        roll_no: 3
    }
};
console.log(MyClass);
console.log(MyClass.Student1);
console.log(MyClass.Student1.name);
console.log(MyClass.Student1.roll_no);
console.log(MyClass.Student2);
console.log(MyClass.Student2.name);
console.log(MyClass.Student2.roll_no);
console.log(MyClass.Student3);
console.log(MyClass.Student3.name);
console.log(MyClass.Student3.roll_no);
