// We have bar called "The Garrison" and is located in
// New England.

// You are tasked to be the bouncer, no people under 21
// are allowed to come inside.
console.log("Welcome to The Garrison, what is your name?");

// let getRandomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// for (let i = 0; i < 5; i++) {
//   let age = getRandomInt(11, 30);

//   if (age >= 21) {
//     console.log("Welcome to The Garrison, enjoy yourself!", age);
//   } else if (age < 21 && age >= 18) {
//     console.log("Almost there buddy but you can't come in", age);
//   } else {
//     console.log("I'm calling your mom, go home!", age);
//   }
// }

let i = 0;
while (i < 5) {
  // do something
  let age = getRandomInt(11, 30);

  //   if (age >= 21) {
  //     console.log("Welcome to The Garrison, enjoy yourself!", age);
  //   } else if (age < 21 && age >= 18) {
  //     console.log("Almost there buddy but you can't come in", age);
  //   } else {
  //     console.log("I'm calling your mom, go home!", age);
  //   }

  switch (age) {
    case age >= 21:
      console.log("Welcome to The Garrison, enjoy yourself!", age);
    case age < 21 && age >= 18:
      console.log("Almost there buddy but you can't come in", age);
    default:
      console.log("I'm calling your mom, go home!", age);
  }
  i = i + 1;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
