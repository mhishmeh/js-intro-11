const Author  = require('./Author')
const Book = require('./Book')

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694)
const book2 = new Book(' A Clash of Kings  ', 'Epic Fantasy',  768)
const book3 = new Book('A Storm of Swords ', 'Epic Fantasy', 973)

const author1 = new Author('George R. R.', 'Martin', 'United States', [book1, book2, book3])





let mostPages = -Infinity
let bookWithMostPages;
for (let book of author1.books) {
    if (book.page > mostPages) {
        
        mostPages = book.page
        bookWithMostPages = book.title
    }
}
console.log(bookWithMostPages)
// let mostPages = -Infinity;
// let bookWithMostPages = "";

// for (let book of author1.books) { // Iterates directly over objects if books is an array
//     if (book.pages > mostPages) {
//         mostPages = book.pages;
//         bookWithMostPages = book.name;
//     }
// }

// console.log(bookWithMostPages);