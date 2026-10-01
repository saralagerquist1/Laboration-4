/* Lösning till uppgift 3: Använt villkor för att avgöra om någon är barn, vuxen elller pensionär. Av Sara Lagerquist, 2026 */
"use strict";

// Variabel
let age = 65;

// Villkor
if (age < 18) {
    console.log("Barn");
} else if (age >= 18 && age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
} 
