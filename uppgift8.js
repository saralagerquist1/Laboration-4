/* Lösning till uppgift 8: Skapat ett objekt som representerar en bok med funktion som tar emot objekt och skriver ut informationen. Av Sara Lagerquist, 2026 */
"use strict";

// Objekt
let book = {
    titel: "Beren and Lúthien",
    author: "J.R.R. Tolkien",
    publicationYear: 2017,
}

// Funktion som tar emot bokobjekt
function bookInfo(book) {
    console.log("Titel: " + book.titel);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.publicationYear);
}

bookInfo(book);
