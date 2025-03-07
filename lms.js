let books = [];

function addBook(title, author) {
  let id = books.length;
  let new_book = { id: id, title: title, author: author, isBorrowed: false };
  books.push(new_book);
}

addBook("The Alchemist", "Paulo Coelho");
