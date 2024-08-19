//-----------------OBJECTS:
//An object in TypeScript is an instance that contains a set of key-value pairs.
//These pairs can hold various data types, including scalar values, functions, or even arrays of other objects.
//Objects are variables too. But objects can contain many values.

let country = {
    country_name : "PAKISTAN",
    capital : "Islamabad"
}
console.log(country);

let Teacher = {
    name : "ahmed",
    experience : "5 years"
}
console.log(Teacher);
console.log(Teacher.name);
console.log(Teacher["experience"]);

//----------------WITH TYPE ALIASED:
type Data = {
    name : string,
    age : number,
    qualification : string | number
}
let data = {
    name : "ali",
    age : 29,
    qualification : "masters"
}
console.log(data);

type Student = {
    name : string,
    age : number
}

let Student = {
    name : "hammad",
    age : 27
}
console.log(Student);
console.log(Student.age);
console.log(Student.name);

//------------ANONYMOUS;
let abc: {num: string,num2: number} = {
    num : "23",
    num2 : 2
}
console.log(abc);
console.log(abc.num);
console.log(abc.num2);

//------------OPTIONAL TYPE INFERENCE:
interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal",
    subordiates: 4
}
console.log(storeManager);
console.log(storeManager.subordiates);

interface examDetails {
    day : string,
    timings? : number | string
}
let examDetails = {
    day : "wednesday",
    timings : 5.00
}
console.log(examDetails);
console.log(examDetails.day);
console.log(examDetails.timings);

//---------------OBJECT LITERALS:
//TypeScript is a Structural Type System. 
//A structural type system means that when comparing types.
//TypeScript only takes into account the members on the type.
//This is in contrast to nominal type systems, where you could create two types but could not assign them to each other.


// These two interfaces are completely
// transferrable in a structural type system:
interface Ball {
    diameter : number
}

interface Sphere {
    diameter : number
}

let ball : Ball = {diameter : 10}
let sphere : Sphere = {diameter : 20}

ball = sphere
sphere = ball

//If we add in a type which structurally contains all of the members of Ball and Sphere, 
//then it also can be set to be a ball or sphere.
interface Tube {
    diameter : number,
    lenght : number
}

let tube : Tube = {diameter : 10, lenght : 3}

//tube = ball        ERROR
//ERROR: Property 'lenght' is missing in type 'Ball' but required in type 'Tube'.ts(2741)
//objects.ts(107, 5): 'lenght' is declared here.

ball = tube
//Because a ball does not have a length, then it cannot be assigned to the tube variable. 
//However, all of the members of Ball are inside tube, and so it can be assigned.
//TypeScript is comparing each member in the type against each other to verify their equality.

//-------------------NESTED OBJECTS:
//Use an interface or a type alias to type a nested object in TypeScript. 
//You can set properties on the interface that point to nested objects.

type author = {
    firstName : string,
    lastName : string
}
type book = {
    Author : author,
    book_name : string
}
const myBook : book = {
    Author : {
        firstName : "Faisal",
        lastName : "khan"
    },
    book_name : "Journey of Typescript"
}
console.log(myBook);
console.log(myBook.Author);
console.log(myBook.book_name);


type student1 = {
    name : string,
    roll_no : number
}
type student2 = {
    name : string,
    roll_no : number
} 
type student3 = {
    name : string,
    roll_no : number
}
type myClass = {
    Student1 : student1,
    Student2 : student2,
    Student3 : student3
}
const MyClass : myClass = {
    Student1 : {
        name : "wasif",
        roll_no : 1
    },
    Student2 : {
        name : "jawwad",
        roll_no : 2
    },
    Student3 : {
        name : "zahid",
        roll_no : 3
    }
}
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