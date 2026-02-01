
// import createMember from "./member.js";

// console.log(createBook(1, "JavaScript", "Arpit",400));
// console.log(createBook(2, "NodeJS", "Ele", 800));
// console.log(createMember(101, "Arpit", "Gold"));

// import borrowBooks from "./borrowRecord.js";

// let member = {memberId: 101,name: "Arpit",membershipType: "Gold"};
// let book1 = {bookId: 1,title: "JavaScript",author: "Arpit",price: 400};
// let book2 = {bookId: 2,title: "NodeJS",author: "Ele",price: 800};
// console.log(borrowBooks(member, [book1, book2]));

// import borrowBooks from "./borrowRecord.js";


// let member = {
//     memberId: 101,
//     name: "Arpit",
//     membershipType: "Gold"
// };

// let books = [
//     { bookId: 1, title: "JavaScript", author: "Arpit", price: 400 },
//     { bookId: 2, title: "NodeJS", author: "Ele", price: 800 }
// ];

// console.log(borrowBooks(member, books, 200));


// import Book from "./book.js";
// Book(
//     "121",
//     "Javascript",
//     "abc",
//     "300"

// );

// import member from "./member.js";
// member(
//     "1",
//     "Arpit",
    
//     "gold"

// )

import borrow from "./borrowRecord.js";

let result = borrow(1, 121);
console.log("Final Amount:", result);