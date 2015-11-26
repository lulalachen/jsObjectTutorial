function Book (name, ISBN, publisher){
  this.name = name;
  this.ISBN = ISBN;
  this.publisher = publisher;
  this.isRented = false;
}

Book.prototype.rent = function() {
  if (this.isRented === true){
    return false; // Already rent
  } else {
    this.isRented = true;
    return true; // Rentable
  }
};

Book.prototype.rentable = function() {
  return (!this.isRented);
};
module.exports = Book;