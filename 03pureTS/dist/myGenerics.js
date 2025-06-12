"use strict";
const score = [1, 2, 3, 4, 5];
const fruits = ["apple", "pineapple", "banana", "guava", "grapes"];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
let sethVikas = identityThree("sethVikas");
let isVikas = identityThree(true);
function identityFour(val) {
    return val;
}
let miltonBootle = identityFour({ brand: "milton", quantity: 2 });
