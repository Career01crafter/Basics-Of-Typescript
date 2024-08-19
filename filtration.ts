//-----------FILTRATION:
//Filtration refers to the process of filtering an array or other,
// collection of data to include only certain elements that meet a specfic condition.

const numbers = [1,2,3,4,5]
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);