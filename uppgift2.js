"use strict";

// Variabler
let price = 100;
let amount = 3;

// Beräkning
let total = price * amount;
let totalIncVat = total * 1.25;

// Utskrift
console.log("Pris: " + price + " kr");
console.log("Antal: " + amount);
console.log("Totalt: " + total + " kr");
console.log("Totalt inklusive moms: " + totalIncVat + " kr");