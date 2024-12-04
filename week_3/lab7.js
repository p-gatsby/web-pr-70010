const library = {
  books: [
    {
      title: "Harry Potter",
      author: "J.K Rowling",
      rating: 12,
      available: true,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 12,
      available: true,
    },
    {
      title: "To Kill a Mocking Bird",
      author: "Harper Lee",
      rating: 18,
      available: true,
    },
    {
      title: "Attack on Titan (Manga)",
      author: "Hajime Isayama",
      rating: 18,
      available: true,
    },
    {
      title: "Naruto (Manga)",
      author: "Masashi Kishimoto",
      rating: 12,
      available: true,
    },
  ],
  users: [
    { name: "Peter", age: 26 },
    { name: "Anakin Skywalker", age: 10 },
  ],
  addBook: function (title, author, rating) {
    this.books.push({ title, author, rating });
    console.log(`Book ${title} has been added.`);
  },
  addUser: function (name, age) {
    this.users.push({ name, age });
    console.log(`User ${name} has been added.`);
  },
  checkoutBook: function (userName, bookTitle) {
    let user = null;

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === userName) {
        user = this.users[i];
      }
    }

    // null = false??
    if (!user) {
      console.log(`User ${userName} not found.`);
      return;
    }

    let book = null;

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === bookTitle) {
        book = this.books[i];
      }
    }

    if (!book) {
      console.log(`Book ${bookTitle} not found.`);
      return;
    }

    // ! means opposite value
    // true = false
    // false = true
    if (!book.available) {
      console.log(`Book ${bookTitle} is currently unavailable.`);
      return;
    }

    if (user.age < book.rating) {
      console.log(
        `User ${userName} does not meet the age requirements for ${bookTitle}`
      );
      return;
    }

    book.available = false;
    console.log(`User ${userName} successfully checkouted ${bookTitle}`);
  },

  listAvailableBooks: function () {
    console.log("Available Books:");

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].available) {
        console.log(
          `${this.books[i].title} by ${this.books[i].author}, (Rating: ${this.books[i].rating})`
        );
      }
    }
  },

  listUsers: function () {
    console.log("Registered Users:");
    for (let i = 0; i < this.users.length; i++) {
      console.log(`${this.users[i].name} (Age: ${this.users[i].age})`);
    }
  },
};


console.log("---------------------------------")
library.listAvailableBooks()
library.listUsers()
console.log("---------------------------------")
console.log("Adding a Book")
library.addBook("Fifty Shades of Grey", "E.L. James", 18)
console.log("---------------------------------")
console.log("Adding a User")
library.addUser("Darth Vader", 55)
console.log("---------------------------------")
library.checkoutBook("Anakin Skywalker", "Attack on Titan (Manga)")
library.checkoutBook("Peter", "Attack on Titan (Manga)")
console.log("---------------------------------")
library.listAvailableBooks()
