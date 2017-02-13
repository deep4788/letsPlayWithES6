#!/usr/bin/env node
"use strict";

//Object: setPrototypeOf()
let person = {
    name: "deep"
};
let friend = {
    name: "chris"
};
console.log(person.__proto__);
Object.setPrototypeOf(person, friend);
console.log(person.__proto__);

//Array: Array.of() and Array.from()
let array1 = Array(5); //Confusing method from ES5
let array2 = Array.of(5); //Better and not confusing
console.log(array1.length); //We expect 1, but get 5
console.log(array2.length);

let numbers = [31, 19, 83];
let numbers2 = Array.from(numbers, val => val * 2);
console.log(numbers2);

//Number: isFinite()
let unlimited = Number.Infinity;
if(Number.isFinite(unlimited)) {
    console.log("Number is finite");
}
else {
    console.log("Number is infinite");
}

//String: startsWith() and endsWith()
let name = "Elizabeth";
console.log(name.startsWith("Eli"));
console.log(name.startsWith("eli"));
console.log(name.endsWith("eth"));
