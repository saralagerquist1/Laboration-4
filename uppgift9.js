"use strict";

// Array
const people = [
    {
        name: "Maj",
        age: 80,
        city: "Gävle"
    },
    {
        name: "Khadija",
        age: 31,
        city: "Stockholm"
    },
    {
        name: "Lana",
        age: 16,
        city: "Falun"
    }
];

// Funktion

function personInfo(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig.");
    }
}

// Loop
for (let person of people) {
    personInfo(person);
}
