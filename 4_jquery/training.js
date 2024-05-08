let allYear = [];
let allPage = [];
let allBook = [];

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

function sortToAsc() {
  for(let i=0; i<books.length; i++){
    allYear.push(books[i].year);
    allYear.sort();
    }
    return console.log("The oldest book found is: "+allYear[0]);
  }

function sortToDsc() {
  for(let i=0; i<books.length; i++){
    allYear.push(books[i].year);
    allYear.sort();
    allYear.reverse();
    }
    return console.log("The oldest book found is: "+allYear[0]);
  }

function totalChapters() {
  for(let i=0; i<books.length; i++){
    allPage.push(books[i].pages);
    result += allPage[i]; 
    }
    console.log("total number of pages added: "+result)
  }

function showAllBooks() {
  for(let i=0; i<books.length; i++) {
    allBook.push(books[i]);
    result = allBook;
  }
  console.log("These are all the books found in the database: ");
  return console.log(result);
}

console.log(getTotal());
sortToAsc();
sortToDsc();
totalChapters();
showAllBooks();