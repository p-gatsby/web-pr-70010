const person = {
  name: "John Doe",
  age: 30,
  favoriteMovies: ["Interstellar", "Star Wars", "Dune"],
  isStudent: true,
  greet: function () {
    return "hello!";
  },
};

const person2 = {
  name: "Lucy Grey",
  age: 26,
  favoriteMovies: ["Nightmare on Elm St", "Jeepers Creepers", "Saw"],
  isStudent: true,
  greet: function () {
    return `Hello I'm ${this.name}`;
  },
};

console.log(person2.greet());

// console.log(animal02.greet());

const grocery_list = [
  "eggs",
  "bread",
  "milk",
  function () {
    return "this is my grocery list";
  },
];

console.log(grocery_list[0]);
console.log(grocery_list[grocery_list.length - 1]());

console.log(grocery_list[2]);

const animal01 = {
  name: "Chewbacca",
  type: "Wookie",
  color: "Brown",
  diet: "omnivore",
  favoriteFoods: [
    "Bantha steak",
    "Wookiee cookies",
    "Rootleaf stew",
    "Pizza",
    "Apple Pie",
  ], // List of favorite foods
  greet: function () {
    return `Mmphh ahhh, I am ${this.name}, a ${this.type}, and I eat ${
      this.diet
    }. rrraaa ah ${this.favoriteFoods.join(", ")}.`;
  },
};
console.log(animal01.favoriteFoods);
//----------------MATT STOP FORGETING THE COMMAS *Note to self*-------------------
// console.log(animal01.greet());
const animal02 = {
  name: "Smaug",
  type: "Dragon",
  color: "Red and Gold",
  diet: "carnivore",
  favoriteFoods: ["Sheep", "Villagers", "Treasure hoard snacks"], // List of favorite foods
  greet: function () {
    return `Roarrr, I am ${this.name}, a fearsome ${
      this.type
    }, and I feast on ${
      this.diet
    }. I indulge mostly on ${this.favoriteFoods.join(", ")}.`;
  },
};
console.log(animal02.favoriteFoods);

console.log(person.favoriteMovies);

const my_animals = [animal01, animal02];

for (let i = 0; i < my_animals.length; i++) {
  console.log(my_animals[i].greet());

  for (let k = 0; k < my_animals[i].favoriteFoods.length; k++) {
    console.log(my_animals[i].favoriteFoods[k]);
  }
}

const navigation = {
  homepage: "some link",
  productpage: "some link",
  signuppage: "some link",
  forgotpasswordpage: "some link",
};

for (const key in navigation) {
  console.log(navigation[key]);
}
