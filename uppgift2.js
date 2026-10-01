/* Lösning till uppgift 2: Skapat två variabler som lagrar information och med hjälp av matematiska operatorer genomfört beräkningarna. Av Sara Lagerquist, 2026 */
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