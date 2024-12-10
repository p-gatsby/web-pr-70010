// function to generate a random number between a minimum and a maximum
function getRandomInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum - 1)) + minimum;
}

// const random numbers = []
// for i to 20
// add the random number Math.floor(Math.random() * (maximum - minimum - 1)) + minimum;

// return the random numbers

const numbers = Array.from({ length: 5 }, () => getRandomInteger(1, 100));
console.log(numbers);
// Output : [21, 26, 45, 12, 78.... N] (20 random numbers)

// Function to get the sum of numbers
// What goes in the parameter? What goes inside of the function?
function sumOfNumbers(myListOfNumbers) {
  // What to do here?
  let totalSum = 0;
  //   myListOfNumbers.forEach((number) => (totalSum = totalSum + number));
  //   other ways to code this
  myListOfNumbers.forEach((number) => (totalSum += number));

  //   // for loop method
  //   for (let i = 0; i <  myListOfNumbers.length; i++) {
  //     // what goes inside of here in the loop?
  //     totalSum += myListOfNumbers[i];
  //   }

  // while loop method
  // condition the loop needs to keep executing otherwise we exit
  //   let i = 0;
  //   while (i <  myListOfNumbers.length) {
  //     // inside the loop
  //     totalSum += myListOfNumbers[i];
  //     i++;
  //   }

  //   totalSum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);

  return totalSum;
}
console.log("Total Sum of Numbers:", sumOfNumbers(numbers));

// what should go in the parameter?
function evenNumbers(myListOfNumbers) {
  let myEvenNumbers = [];
  // what should this function do?
  // I want to go through all the numbers and find the even numbers
  // put them in a new list
  // and return that list
  //   for (let i = 0; i < myListOfNumbers.length; i++) {
  //     // if its even add it to the new list of myEvenNumbers
  //     if (myListOfNumbers[i] % 2 == 0) {
  //       myEvenNumbers.push(myListOfNumbers[i]);
  //     }
  //   }

  //     while loop method
  //   condition the loop needs to keep executing otherwise we exit
  let i = 0;
  while (i < myListOfNumbers.length) {
    // inside the loop
    if (myListOfNumbers[i] % 2 == 0) {
      myEvenNumbers.push(myListOfNumbers[i]);
    }
    i++;
  }

  return myEvenNumbers;
}

console.log("All Even Numbers:", evenNumbers(numbers));
