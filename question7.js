// question 7
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isBorrowed = false;
    this.borrow = function() {
      this.isBorrowed = true;
    };
    this.returnBook = function() {
      this.isBorrowed = false;
    };
  }

  function Library() {
    this.books = [];
    this.addBook = function(book) {
      this.books.push(book);
    };
    this.findBookByISBN = function(isbn) {
      return this.books.find(book => book.isbn === isbn);
    };
    this.listAvailableBooks = function() {
      return this.books.filter(book => !book.isBorrowed);
    };
    this.listBorrowedBooks = function() {
      return this.books.filter(book => book.isBorrowed);
    };
  }

let book1 = new Book("Computer Networks", "author", "123");
let book2 = new Book("The Hobbit", "Tolkien", "456");
let myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
book1.borrow();
let foundBook = myLibrary.findBookByISBN("123");
