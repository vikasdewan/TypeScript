"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 1;
score = "1"; //no error.
var vikas = {
    user_id: "1",
    name: "vikas",
    email: "vikas@gmail.com",
    age: 22,
    streak: 53,
    username: "vikas",
    admin_id: 21
};
// function getDbId(id:number | string){
//     //any API calls.
//     console.log(`DB id is : ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase(); // to use this u have to check the type first.
    }
    else {
        id + 2;
    }
}
//array
var data1 = [1, 2, 3, 4, 5];
var data2 = ["4"];
var data3 = [1, 2, 3, 4, 5, "4", true]; // now u can use multiple datatypes in an array.
var seatAllotment;
seatAllotment = "aisle";
