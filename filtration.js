//-----------FILTRATION:
//Filtration refers to the process of filtering an array or other,
// collection of data to include only certain elements that meet a specfic condition.
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (num) { return num % 2 === 0; });
console.log(evenNumbers);
