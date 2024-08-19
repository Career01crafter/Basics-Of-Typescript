//----------------ENUMS:
//In TypeScript,an enum (enumeration) is a special data type that allows you to define a set of named constants. 
//It helps you manage and work with a collection of related values in a more readable and maintainable way.

enum color {
    red = "Red",
    blue = "Blue",
    green = "Green"
}
console.log(color.green);
console.log(color["blue"]);

const getCurrentYear = () => new Date().getFullYear()
enum today {
    current = getCurrentYear(),
    next = current + 1
}
console.log(today.current);


const getTodayDate = () => new Date().getDate()

enum Today {
    atTime = getTodayDate()
}
console.log(Today.atTime);

//----------------CONST ENUMS:
//A const enum is a special kind of enum that’s used primarily for performance optimization. 
//It’s a compile-time construct that helps to reduce the generated JavaScript code by inlining the enum values.
//const enyums only be accessing by there values or string literals.
//const enums cannot be access by indexing.

const enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }
let move = Direction.Left
console.log(move);  