//  what is the difference between =, ==, === ?
// let strNumber = "10"
// let number = 10

// data types
// string, boolean, numbers
// string == numbers?

// == loose equality
// compares the values after converting them to the same type

// === strict equality
// Compares both value and the datatype

// console.log(typeof(number))

// // number = strNumber
// console.log(number == strNumber)
// console.log(number === strNumber)

// const is use to make a constant where we cannot re-assign the value
// let allowes to assign and re-assign a variable
let favoriteColor = "blue";
favoriteColor = "green";
// console.log(favoriteColor);

//  what is this variable being assigned to?
// Object
// to assign a key-value pair, we use the colon symbol
let user = {
  loggedIn: true,
  username: "Cool dude",
  age: "26",
};

if (user.loggedIn == false) {
  console.log("you are not signed in");
}

// What is NaN? (Not a Number)
let total = 0;
total = total + 10;
// console.log(total);

// to return the sum we need to use the 'return' keyword
function calculateSum(a, b) {
  let sum = a + b;
  return sum;
}

// console.log(calculateSum(5, 10));

// functions can affect variables outside of their scope

// any variable initalized inside a function can not
// be used outside of their scope
let aNumber = 7;

// functions can either have an effect or return a value

// primitives types: numbers, booleans // pass by value
// objects/arrays: pass by references

function reduceNumber(a) {
  // pass by referrence vs pass by value
  a = a - 3;
  //   let bNumber = 100;

  //   return bNumber;
}

// reduceNumber(aNumber);

// console.log(aNumber);

// console.log(reduceNumber(4));

// colors.length returns the total number of elements
// (not accuarete to the indexing of the list)
// e.g if there are 3 items the total index is up 0, 1, 2

// initially the problem was that it kept running because
// value 3 <= 3 is true but we know that the index ends at 2
// hence we printed out undefined

// let colors = ["red", "green", "blue"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//
// indexing is how arrays are arrange in computers
// starts from 0 to the last item ...N
// arrays are indexed
// 0, 1, 2, 3... there is no 4th index
// const numbers = [10, 20, 30, 40];
// console.log(numbers[3]);

// objects are key-value pairs
// the key has to be correctly referenced
const person = {
  name: "John",
  age: 30,
};

console.log(person["fullname"]);

// the reason this didn't work because we needed
// to use the == to check the equailty
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i] + " is even");
  } else {
    console.log(numbers[i] + " is odd");
  }
}

