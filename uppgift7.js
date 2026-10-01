/* Lösning till uppgift 7: Skapat array med en funktion som räknar ut arrayens summa. Av Sara Lagerquist, 2026 */
"use strict";

// Funktion
function calculateSum(numbers) {
    let sum = 0;

    // Loop
    numbers.forEach(number => {
        sum += number;
    })

    return sum;

}

// Array
const numbers = [1, 2, 3, 4, 5, 6];

// Utskrift
console.log(calculateSum(numbers));