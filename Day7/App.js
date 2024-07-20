//*Method-1 for adding function to book object
const book = {
  title: "LLD",
  author: "Aslam Ansari",
  year: "2024",

  getBookDetails: () => {
    return { title: book.title, author: book.author };
  },
  updateYear: (year) => {
    book.year = year;
  },
};

//*Method-2 for adding function to book object
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// Book.prototype.getBookDetails = function () {
//   return { title: this.title, author: this.author };
// };
// const book1 = new Book("LLD", "Aslam Ansari", "2024");

// console.log(book1.getBookDetails());

// console.log(book);
// console.log(book.title);
// console.log(book.author);
// console.log(book.getBookDetails());
// book.updateYear(2023);
// console.log(book);

const library = {
  name: "Computer",
  book: [
    {
      title: "LLD",
      author: "Aslam Ansari",
      year: "2024",
      getTitle: function () {
        return `The title of the book is: ${this.title}`;
      },
    },
    {
      title: "HLD",
      author: "Aslam Ansari",
      year: "2024",
      getTitle: function () {
        return `The title of the book is: ${this.title}`;
      },
    },
  ],
};

// console.log(library);
// console.log(library.name);
// library.book.forEach((value) => console.log(value.title));

for (index in library.book) {
  const val = library.book[index];
  //console.log(val);
  //console.log(Object.keys(val));
  //console.log(Object.values(val));
  // for (ind in val) {
  //   console.log(val[ind]);
  //   const obj = val[ind];
  //   console.log(Object.keys(obj));
  //   console.log(Object.values(obj));
  // }
}

console.log(
  library.book.forEach((val) => {
    console.log(val.getTitle());
  })
);
