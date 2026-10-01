"strict";

let book = {
    titel: "Beren and Lúthien",
    author: "J.R.R. Tolkien",
    publicationYear: 2017,
}

function bookInfo(book) {
    console.log("Titel: " + book.titel);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.publicationYear);
}

bookInfo(book);
