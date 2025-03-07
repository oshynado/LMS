let books = [];
let authors = new Set();

function addBook(title, author) {
  let id = books.length;
  authors.add(author);
  let new_book = { id: id, title: title, author: author, isBorrowed: false };
  books.push(new_book);
}

//omar nader section

function booksNumber() {
  console.log(`Total Books: ${books.length}`);
}

function countBorrow() {
  let borrowed = 0;
  for (let book of books) {
    if (book.isBorrowed) {
      borrowed++;
    }
  }
  console.log(`Books Borrowed: ${borrowed}`);
  console.log(`Books Available: ${books.length - borrowed}`);
}

function most_borrow_author() {
  let best_author = "",
    n,
    maxn = 0;
  for (let author of authors) {
    n = 0;
    for (let book of books) {
      if (author == book.author && book.isBorrowed) {
        n++;
      }
    }
    if (n > maxn) {
      maxn = n;
      best_author = author;
    }
  }
  console.log(`Most Borrowed Author: ${best_author}`);
}

function report() {
  booksNumber;
  countBorrow;
  most_borrow_author;
}

addBook("The Alchemist", "Paulo Coelho");
