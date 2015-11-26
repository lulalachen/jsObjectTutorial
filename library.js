var Book = require('./book.js')

function Library (name, location){
  this.name = name || '';
  this.location = location || '';
  this.books = [];
};

//////////////
/// Books ////
//////////////

Library.prototype.newBook = function(bookname, ISBN, publisher) {
  var book = new Book(bookname,ISBN, publisher);
  this.books.push(book);
};

Library.prototype.howManyBooks = function() {
  return this.books.length;
};
Library.prototype.howManyBooksRentable = function() {
  var temp = 0;
  for (var i = 0; i < this.books.length; i++) {
    if (this.books[i].rentable())
      temp++;
  };
  return temp;
};

Library.prototype.rentBook = function(ISBN) {
  for (var i = 0; i < this.books.length; i++) {
    if ( this.books[i].ISBN === ISBN && this.books[i].rentable() ){
      console.log(this.books[i].name + ' is rented.');
      this.books[i].rent();
    }
  };
};

Library.prototype.removeBook = function(ISBN) {
  for (var i = 0; i < this.books.length; i++) {
    if (this.books[i].ISBN === ISBN){
      console.log(this.books[i].name + ' is removed.');
      this.books.splice(i);
      return true;
    }
  };
  return false;
};


/////////////////
/// Location ////
/////////////////

Library.prototype.setLocation = function(location) {
  this.location = location;
};

Library.prototype.getLocation = function() {
  return this.location;
};


module.exports = Library;