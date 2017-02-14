#!/usr/bin/env node
"use strict";

//Modules: import
// export.js
//export let exportVar = 42;
//import.js
//import { exportVar } from './export';

//Module Loaders
// Dynamic loading – ‘System’ is default loader
//System.import('lib/math').then(function(m) {
//  alert("2π = " + m.sum(m.pi, m.pi));
//  });

//Classes
class Person {
    constructor(name) {
        this.name = name;
        Person.count++;
    }

    sayHello() {
        this.name = "Deep";
        console.log(`Hello! from ${this.name}`);
    }

    static numOfPersonObjs() {
        console.log(Person.count);
    }
}
Person.count = 0;

let p = new Person("sds");
p.sayHello();
let p2 = new Person("sds");
Person.numOfPersonObjs();

//Subclassable Built-ins
// User code of Array subclass
class MyArray extends Array {
    constructor(...args) { super(...args); }
}
var arr = new MyArray();
arr[4] = 12;
console.log(arr.length);

//Symbols
//A new primitive type in ES6. Basically, a Symbol is a unique ID
let symbol = Symbol("only for debugging, this is not the ID!");
console.log(symbol);
