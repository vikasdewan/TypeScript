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
