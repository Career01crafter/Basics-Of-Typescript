//-----------OBJECT ORIENTED PROGRAMMING (OOP):
//OOP in TS is a programming paradigm that revolves around the concept of objects and classes,
//which are used to create reusable, modules and maintainable code.
//It's based on four fundamental principle:
//1: encapsulation   2: abstraction   3: inheritance   4: polymorphism

//----------KEY OOP CONCEPTS IN TYPESCRIPT:
//1: classes  2: objects  3: interfaces  4: inheritance  5: polymorphism   6: access modifier  7: abstract classes

//-----------CLASSES:
//In TS a class is a blueprint for creating objects that contain data and functions taht operate on that data.
//Classes are essentially templates for objects,defining their properties and methods.
//SYNTAX:
class Classname {
  constructor() {}
}

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}
const animal = new Animal("Lion");
animal.speak(); // Output: Lion makes a noise.

//------------INHERITANCE:
//Inheritance allows a class to inherit properties and methods from another class.
//The derived class (or child class) extends the base class (or parent class).

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog("Rex");
dog.speak(); // Output: Rex makes a noise.
dog.bark(); // Output: Rex barks.

//----------ENCAPSULATION:
//Encapsulation involves bundling data (properties) and methods that operate on the data into a single unit,
//typically a class.It also involves restricting access to some of the object's components,
//which can be done using access modifiers.

class Person {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public getAge(): number {
    return this.age;
  }
}
const person = new Person("John", 30);
console.log(person.name); // Output: John
console.log(person.getAge()); // Output: 30
// console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'.

//-------------ABSTRACTION:
//Abstraction involves hiding complex implementation details and showing only the necessary features of an object.
//In TypeScript, this can be achieved using abstract classes and interfaces.
//-------------ABSTRACT CLASSES:
//An abstract class cannot be instantiated directly.
//It can include abstract methods that must be implemented by derived classes.

abstract class Shape {
  abstract getArea(): number;
  display(): void {
    console.log(`The area is ${this.getArea()}`);
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(5);
circle.display(); // Output: The area is 78.53981633974483

//----------INTERFACES:
//Interfaces define a contract for classes without providing implementation.
//Classes that implement an interface must adhere to its structure.

interface IShape {
  getArea(): number;
}

class Rectangle implements IShape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea()); // Output: 200

//------------POLYMORPHISM:
//Polymorphism allows objects to be treated as instances of their parent class rather than their actual class.
//The actual method that is called is determined at runtime based on the object's type.

class Cat extends Animal {
  speak(): void {
    console.log(`${this.name} meows.`);
  }
}

const animals: Animal[] = [new Dog("Rex"), new Cat("Whiskers")];
animals.forEach((animal) => animal.speak());
// Output: Rex makes a noise.
//         Whiskers meows.
