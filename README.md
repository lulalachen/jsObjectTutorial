# Run the application
```
 node main.js
```

# Structure
### Library

  __[ Properties ]__
  name, location, books;

  __[ Methods ]__
  newBook(bookname, ISBN, publisher), \\
  howManyBooks(), \\
  howManyBooksRentable(), \\
  rentBook(ISBN), \\
  removeBook(ISBN), \\
  setLocation(location), \\
  getLocation();

### Books

  __[ Properties ]__
  name, ISBN, publisher;

  __[ Methods ]__
  isRented(), \\
  rent(), \\
  rentable();
