/**
 * Quando é tentado realizar a soma de dois valores, onde um deles é do tipo string, é retornada a concatenação.
 */

// let friendSalary = 1000;
// let mySalary = '2999';

// console.log( friendSalary + mySalary);
// console.log(
//   typeof(friendSalary),
//   friendSalary
// )
// console.log(
//   typeof(mySalary),
//   mySalary
// )

let friendSalary = 1000;
let mySalary = '2999.99';
let convertedSalary = Number(mySalary)

console.log( friendSalary + convertedSalary);
console.log(
  typeof(friendSalary),
  friendSalary
)
console.log(
  typeof(convertedSalary),
  convertedSalary
)

console.log(
  isNaN(convertedSalary)
)

let myString = 'Hello, world!'
let myAnotherString = 'Hello world, again.'
let stringWithVariables = `${myString} - ${myAnotherString}`

console.log(stringWithVariables)