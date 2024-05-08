let allAuthors = [];
result = 0;
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    year: 1925,
    isbn: "9780743273565"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    year: 1960,
    isbn: "9780061120084"
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    year: 1949,
    isbn: "9780451524935"
  }
];
// Write a function here
function getTotal() {
  for(let i=0; i<books.length; i++){
    result = i+books.length;
    return "total number of books are: "+result;
  }
}

function findNewestBook(books) {
  let newestBook = null;
  for (const book of books) {
    if (!newestBook || book.year > newestBook.year) {
      newestBook = book;
    }
  }
  return newestBook;
}

function findOldestBook(books) {
  let oldestBook = null;
  for (const book of books) {
    if (!oldestBook || book.year < oldestBook.year) {
      oldestBook = book;
    }
  }
  return oldestBook;
}
console.log(getTotal());
const oldestBook = findOldestBook(books);
console.log("The oldest book is:", oldestBook);
const newestBook = findNewestBook(books);
console.log("The newest book is:", newestBook);