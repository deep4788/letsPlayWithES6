#!/usr/bin/env node
"use strict";

//Maps
let friends = new Map();
friends.set("chris", 27);
friends.set("mike", 29);
friends.set("david", 28);
console.log(friends);
console.log(friends.size);
console.log(friends.has("mike"));

//Set
let favoriteFood = new Set();
favoriteFood.add("chocolate");
favoriteFood.add("ice-cream");
favoriteFood.add("cake");
console.log(favoriteFood);
console.log(favoriteFood.size);
