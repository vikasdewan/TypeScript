"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val.toFixed();
}
function provideId(id) {
    if (!id) {
        return "please provide ID";
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function AdminOrNot(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
    return false;
}
new Date(); // Date is also a data type same like array, string ,number etc.
function logValue(x) {
    if (x instanceof Date) { // instanceof keyword work  
        //mostly when something is constructed 
        // using "new" keyword.
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
