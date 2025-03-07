let books = [];

function addBook(title, author) {
  id = length(books);
  let new_book = { id: id, title: title, author: author, isBorrowed: false };
  books.push(new_book);
}
