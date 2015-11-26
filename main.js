var Library = require('./library.js');

var cityLib = new Library('lulala library', 'Beitou');

// Initail Books //
cityLib.newBook('地球人生存手冊', '9789863424871', '三采文化股份有限公司');
cityLib.newBook('樂享葡萄酒的第一本書', '9789862483794', '山岳文化');
cityLib.newBook('喝遍義大利', '9789864590179', '積木出版社');


// Testing //
var a = cityLib.howManyBooks();
console.log(a + ' books left.');

  // Remove book
cityLib.removeBook('9789864590179');

var b = cityLib.howManyBooks();
console.log(b + ' books left.');
  // Rent book
cityLib.rentBook('9789863424871');

var c = cityLib.howManyBooks();
console.log(c + ' books left.');

var d = cityLib.howManyBooksRentable();
console.log(d + ' books rentable.');
