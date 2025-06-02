"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    Auth: {
        name: "vikas",
        email: "vikas@gmail.com",
        password: "1234",
    },
    Education: {
        degree: "Btech",
        college: "IIT",
        year: "2018",
    },
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPlaced;
}
;
var newUser = { name: "vikas", isPlaced: true, package: 1200000 };
// createUser({name: "vikas", isPlaced : true});
createUser(newUser);
function createStudent() {
    return { name: "vikas", class: 12 };
}
;
