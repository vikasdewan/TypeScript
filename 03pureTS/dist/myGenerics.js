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
function getSearchProducts(products) {
    //do some database operations
    const myIdx = 3;
    return products[myIdx];
}
let getMoreSearchProducts = (products) => {
    //do some database calculation
    const myIdx = 4;
    return products[myIdx];
};
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
anotherFunction(3, { connection: "server", username: "debu", password: "23243" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
