//abdelrahman saeed section
let books = [];
let authors = new Set();

function addBook(title, author) {
  let id = books.length;
  authors.add(author);
  let new_book = { id: id, title: title, author: author, isBorrowed: false };
  books.push(new_book);
}

function removeBook(id) {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
      console.log(`Book "${books[index].title}" removed.`);
      books.splice(index, 1);
  } else {
      console.log("Book not found.");
  }
}

function listAvailableBooks() {
  const availableBooks = books.filter(book => !book.isBorrowed);
  if (availableBooks.length === 0) {
      console.log("No available books.");
  } else {
      console.log("Available Books:");
      availableBooks.forEach(book => console.log(`${book.id}: ${book.title} by ${book.author}`));
  }
}
addBook(1, "The Alchemist", "Paulo Coelho");
addBook(2, "To Kill a Mockingbird", "Harper Lee");
addBook(3, "1984", "George Orwell");

console.log("\nBefore removing:");
listAvailableBooks();

removeBook(2);

console.log("\nAfter removing:");
listAvailableBooks();


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


function addBook(title, author) {
  let id = books.length;
  let new_book = { id: id, title: title, author: author, isBorrowed: false };
  books.push(new_book);
}


function Borrowbook(id){
  let book = books.find(b => b.id === id);
  if (book){
    if (book.isBorrowed){
      book.isBorrowed=true;
      console.log('The book has been borrowed. : "${book.title}"');
  } 
      else{
    console.log('The book "${book.title}" is already borrowed');
  }
      
}
else{
  console.log('There is no book with the ID number ${id}');
}
}
function listBorrowedBooks() {
  let borrowedBooks = books.filter(b => b.isBorrowed);
  if (borrowedBooks.length > 0) {
    console.log("Borrowed books:");
    borrowedBooks.forEach(book => console.log('- ${book.title} (${book.author}'));
  }
  else {
    console.log("There are currently no books borrowed.");
  }
}