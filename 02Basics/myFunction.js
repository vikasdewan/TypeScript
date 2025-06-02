"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, age, isPassword) { }
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    //logic...
    return "user Logged In Successfully";
};
addTwo(5);
getUpper("type is string");
signUp("vikas", "vikas@email.com", 24, true);
loginUser("vikas@gmail.com", "password123");
function getFood(foodQuantity) {
    if (foodQuantity < 5) {
        return true;
    }
    return "can't deliver food right now";
}
var deliverFood = function (foodQuantity) {
    if (foodQuantity < 5) {
        return true;
    }
    return false;
};
var heros = ["cap", "ironman", "spidy", "thor", "hulk"];
// const heros = [1,2,3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
